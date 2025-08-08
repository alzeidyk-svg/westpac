#!/usr/bin/env node

const http = require('http');
const https = require('https');
const url = require('url');

// Configuration
const config = {
  // Default to localhost:3000, but can be overridden with environment variables
  host: process.env.HEALTH_CHECK_HOST || 'localhost',
  port: process.env.HEALTH_CHECK_PORT || 3000,
  path: process.env.HEALTH_CHECK_PATH || '/api/health',
  timeout: parseInt(process.env.HEALTH_CHECK_TIMEOUT) || 5000,
  protocol: process.env.HEALTH_CHECK_PROTOCOL || 'http'
};

// Build the URL
const checkUrl = `${config.protocol}://${config.host}:${config.port}${config.path}`;

console.log(`🔍 Checking website health at: ${checkUrl}`);
console.log(`⏱️  Timeout: ${config.timeout}ms`);
console.log('---');

function performHealthCheck() {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const urlParts = url.parse(checkUrl);
    const requestModule = urlParts.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlParts.hostname,
      port: urlParts.port || (urlParts.protocol === 'https:' ? 443 : 80),
      path: urlParts.path,
      method: 'GET',
      timeout: config.timeout,
      headers: {
        'User-Agent': 'Westpacs-Health-Check/1.0'
      }
    };

    const req = requestModule.request(options, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const healthData = JSON.parse(data);
          resolve({
            success: true,
            statusCode: res.statusCode,
            responseTime,
            data: healthData
          });
        } catch (error) {
          resolve({
            success: false,
            statusCode: res.statusCode,
            responseTime,
            error: 'Invalid JSON response',
            rawData: data
          });
        }
      });
    });

    req.on('error', (error) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      reject({
        success: false,
        responseTime,
        error: error.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      reject({
        success: false,
        responseTime,
        error: `Request timed out after ${config.timeout}ms`
      });
    });

    req.end();
  });
}

async function main() {
  try {
    const result = await performHealthCheck();
    
    if (result.success && result.statusCode === 200) {
      console.log('✅ Website is HEALTHY');
      console.log(`📊 Response time: ${result.responseTime}ms`);
      console.log(`🌟 Status: ${result.data.status}`);
      console.log(`💬 Message: ${result.data.message}`);
      
      if (result.data.checks) {
        console.log('\n📋 Service Status:');
        Object.entries(result.data.checks).forEach(([service, status]) => {
          const icon = typeof status === 'string' && status === 'healthy' ? '✅' : 
                     typeof status === 'string' && status === 'unhealthy' ? '❌' : '📝';
          console.log(`   ${icon} ${service}: ${status}`);
        });
      }
      
      console.log(`\n🕐 Checked at: ${new Date().toLocaleString()}`);
      process.exit(0);
      
    } else {
      console.log('❌ Website is UNHEALTHY');
      console.log(`📊 Response time: ${result.responseTime}ms`);
      console.log(`🔢 Status code: ${result.statusCode}`);
      
      if (result.error) {
        console.log(`❗ Error: ${result.error}`);
      }
      
      if (result.data && result.data.message) {
        console.log(`💬 Message: ${result.data.message}`);
      }
      
      process.exit(1);
    }
    
  } catch (error) {
    console.log('💥 HEALTH CHECK FAILED');
    console.log(`📊 Response time: ${error.responseTime || 'N/A'}ms`);
    console.log(`❗ Error: ${error.error}`);
    console.log(`\n🕐 Checked at: ${new Date().toLocaleString()}`);
    process.exit(1);
  }
}

// Handle script arguments
if (process.argv.length > 2) {
  const customUrl = process.argv[2];
  if (customUrl.startsWith('http')) {
    const parsed = url.parse(customUrl);
    config.protocol = parsed.protocol.slice(0, -1); // Remove trailing :
    config.host = parsed.hostname;
    config.port = parsed.port || (parsed.protocol === 'https:' ? 443 : 80);
    config.path = parsed.path || '/api/health';
  }
}

// Run the health check
main();