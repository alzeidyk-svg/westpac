"use client";

import { useState, useEffect } from 'react';

interface HealthCheck {
  status: string;
  message: string;
  checks: {
    server: string;
    database: string;
    cache: string;
    timestamp: string;
    uptime: number;
    version: string;
    environment: string;
  };
  timestamp: string;
}

export default function StatusPage() {
  const [healthData, setHealthData] = useState<HealthCheck | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealthStatus = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/health');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      setHealthData(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch status');
      setHealthData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchHealthStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-100';
      case 'unhealthy':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-yellow-600 bg-yellow-100';
    }
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Westpacs System Status
          </h1>
          <p className="text-gray-600">
            Real-time monitoring of our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Overall Status */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">
                Overall Status
              </h2>
              <button
                onClick={fetchHealthStatus}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? 'Checking...' : 'Refresh'}
              </button>
            </div>

            <div className="mt-4">
              {error ? (
                <div className="flex items-center space-x-3 p-4 bg-red-100 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <span className="text-red-700 font-medium">Service Error</span>
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                </div>
              ) : healthData ? (
                <div className={`flex items-center space-x-3 p-4 rounded-lg ${getStatusColor(healthData.status)}`}>
                  <div className={`w-4 h-4 rounded-full ${healthData.status === 'healthy' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <div>
                    <span className="font-medium">{healthData.message}</span>
                    <p className="text-sm opacity-75">
                      Last updated: {new Date(healthData.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-4 h-4 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-600">Loading status...</span>
                </div>
              )}
            </div>
          </div>

          {/* Service Details */}
          {healthData && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Service Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(healthData.checks).map(([key, value]) => (
                  <div key={key} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                      {typeof value === 'string' && (value === 'healthy' || value === 'unhealthy') ? (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          value === 'healthy' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {value}
                        </span>
                      ) : (
                        <span className="text-gray-900 font-mono text-sm">
                          {key === 'uptime' && typeof value === 'number' 
                            ? formatUptime(value)
                            : String(value)
                          }
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Health Check Information
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>• Status is updated every 30 seconds automatically</p>
              <p>• Health checks monitor server, database, and cache status</p>
              <p>• Click "Refresh" to manually check current status</p>
              <p>• API endpoint: <code className="bg-gray-100 px-1 rounded">/api/health</code></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}