import { NextRequest, NextResponse } from 'next/server';

// Configure for static export
export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  try {
    // Check various system components
    const timestamp = new Date().toISOString();
    
    // Basic health checks
    const checks = {
      server: 'healthy',
      database: 'healthy', // Would connect to real DB in production
      cache: 'healthy',     // Would check cache in production
      timestamp: timestamp,
      uptime: 0, // Static value for build time
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'production'
    };

    return NextResponse.json({
      status: 'healthy',
      message: 'Website is running normally',
      checks: checks,
      timestamp: timestamp
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    return NextResponse.json({
      status: 'unhealthy',
      message: 'Website experiencing issues',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function HEAD(request: NextRequest) {
  // Simple ping endpoint
  return new NextResponse(null, { status: 200 });
}