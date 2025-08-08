"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HealthStatus {
  status: string;
  message: string;
  timestamp: string;
}

export default function Home() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHealthStatus = async () => {
    try {
      const response = await fetch('/api/health');
      if (response.ok) {
        const data = await response.json();
        setHealthStatus({
          status: data.status,
          message: data.message,
          timestamp: data.timestamp
        });
      }
    } catch (error) {
      console.error('Failed to fetch health status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthStatus();
    // Refresh every minute
    const interval = setInterval(fetchHealthStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusDisplay = () => {
    if (isLoading) {
      return {
        color: "bg-yellow-500",
        text: "Checking Status...",
        description: "Please wait"
      };
    }
    
    if (!healthStatus || healthStatus.status !== 'healthy') {
      return {
        color: "bg-red-500",
        text: "Service Issues",
        description: "Some services may be unavailable"
      };
    }
    
    return {
      color: "bg-green-500",
      text: "Website is Running",
      description: "All systems operational"
    };
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Westpacs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted banking and financial services partner
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Website Status
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className={`w-3 h-3 ${statusDisplay.color} rounded-full ${isLoading ? 'animate-pulse' : healthStatus?.status === 'healthy' ? 'animate-pulse' : ''}`}></div>
              <span className="text-lg font-medium text-gray-700">
                {statusDisplay.text}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {statusDisplay.description}
            </p>
            {healthStatus && (
              <div className="text-xs text-gray-400">
                Last checked: {new Date(healthStatus.timestamp).toLocaleString()}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <Link 
              href="/status" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View Detailed Status →
            </Link>
            
            <div className="flex justify-center space-x-4 text-sm">
              <Link href="/business" className="text-blue-600 hover:text-blue-800">
                Business Banking
              </Link>
              <Link href="/personal" className="text-blue-600 hover:text-blue-800">
                Personal Banking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}