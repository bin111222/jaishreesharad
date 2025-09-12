"use client";

import { useEffect, useState } from 'react';

interface SystemInfo {
  userAgent: string;
  platform: string;
  isAndroid: boolean;
  isIOS: boolean;
  isMobile: boolean;
  systemTheme: string;
  browserScheme: string;
  colorScheme: string;
  bodyBackground: string;
  bodyColor: string;
  htmlClasses: string;
  bodyClasses: string;
  viewportWidth: number;
  viewportHeight: number;
  devicePixelRatio: number;
  touchSupport: boolean;
  orientation: string;
  timestamp: string;
}

export default function TestDarkModePage() {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isLight, setIsLight] = useState<boolean | null>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    setLogs(prev => [...prev, logMessage]);
    console.log(logMessage);
  };

  const collectSystemInfo = (): SystemInfo => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isMobile = /Mobi|Android/i.test(userAgent);
    
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const browserScheme = getComputedStyle(document.documentElement).colorScheme;
    const colorScheme = document.documentElement.style.colorScheme || 'not set';
    
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    const bodyColor = getComputedStyle(document.body).color;
    
    const htmlClasses = document.documentElement.className;
    const bodyClasses = document.body.className;
    
    const isLightMode = bodyBg.includes('255') || bodyBg.includes('white') || bodyBg.includes('#fff') || bodyBg.includes('rgb(255');

    return {
      userAgent,
      platform,
      isAndroid,
      isIOS,
      isMobile,
      systemTheme,
      browserScheme,
      colorScheme,
      bodyBackground: bodyBg,
      bodyColor,
      htmlClasses,
      bodyClasses,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      touchSupport: 'ontouchstart' in window,
      orientation: window.screen.orientation?.type || 'unknown',
      timestamp: new Date().toISOString()
    };
  };

  const updateSystemInfo = () => {
    const info = collectSystemInfo();
    setSystemInfo(info);
    setIsLight(info.bodyBackground.includes('255') || info.bodyBackground.includes('white') || info.bodyBackground.includes('#fff'));
    
    addLog(`System Info Updated - Theme: ${info.systemTheme}, Browser: ${info.browserScheme}, Body BG: ${info.bodyBackground}`);
    
    if (info.isAndroid) {
      addLog(`🤖 ANDROID DETECTED - Platform: ${info.platform}, User Agent: ${info.userAgent}`);
    }
    
    if (info.isMobile) {
      addLog(`📱 MOBILE DETECTED - Viewport: ${info.viewportWidth}x${info.viewportHeight}, Touch: ${info.touchSupport}`);
    }
  };

  useEffect(() => {
    addLog('🚀 Test page loaded - starting system detection');
    
    // Initial system info collection
    updateSystemInfo();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      addLog('🔄 System theme changed detected');
      updateSystemInfo();
    };
    
    mediaQuery.addEventListener('change', handleThemeChange);
    
    // Listen for window resize (orientation changes)
    const handleResize = () => {
      addLog('📐 Window resized - updating info');
      updateSystemInfo();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Listen for orientation changes
    const handleOrientationChange = () => {
      addLog('🔄 Orientation changed');
      setTimeout(updateSystemInfo, 100); // Small delay to let orientation settle
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Periodic check for changes
    const intervalId = setInterval(() => {
      const currentInfo = collectSystemInfo();
      if (systemInfo && (
        currentInfo.systemTheme !== systemInfo.systemTheme ||
        currentInfo.bodyBackground !== systemInfo.bodyBackground ||
        currentInfo.browserScheme !== systemInfo.browserScheme
      )) {
        addLog('⏰ Periodic check detected changes');
        updateSystemInfo();
      }
    }, 2000);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      clearInterval(intervalId);
    };
  }, []);

  const copyLogs = () => {
    const logText = logs.join('\n');
    navigator.clipboard.writeText(logText).then(() => {
      addLog('📋 Logs copied to clipboard');
    });
  };

  const downloadLogs = () => {
    const logText = logs.join('\n');
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dark-mode-test-logs-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addLog('💾 Logs downloaded');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Dark Mode Test & Debug Page</h1>
        
        {/* Status Indicator */}
        <div className={`p-4 rounded-lg mb-6 text-center ${
          isLight === true ? 'bg-green-100 text-green-800' : 
          isLight === false ? 'bg-red-100 text-red-800' : 
          'bg-yellow-100 text-yellow-800'
        }`}>
          <h2 className="text-xl font-semibold">
            {isLight === true ? '✅ SUCCESS: Page is in light mode!' : 
             isLight === false ? '❌ ISSUE: Page appears to be in dark mode' : 
             '⏳ Testing...'}
          </h2>
        </div>

        {/* System Information */}
        {systemInfo && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">System Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Device Type:</strong> {systemInfo.isAndroid ? '🤖 Android' : systemInfo.isIOS ? '🍎 iOS' : '💻 Desktop'}
              </div>
              <div>
                <strong>Platform:</strong> {systemInfo.platform}
              </div>
              <div>
                <strong>Mobile:</strong> {systemInfo.isMobile ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Touch Support:</strong> {systemInfo.touchSupport ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Viewport:</strong> {systemInfo.viewportWidth} × {systemInfo.viewportHeight}
              </div>
              <div>
                <strong>Device Pixel Ratio:</strong> {systemInfo.devicePixelRatio}
              </div>
              <div>
                <strong>Orientation:</strong> {systemInfo.orientation}
              </div>
              <div>
                <strong>System Theme:</strong> {systemInfo.systemTheme}
              </div>
              <div>
                <strong>Browser Color Scheme:</strong> {systemInfo.browserScheme}
              </div>
              <div>
                <strong>CSS Color Scheme:</strong> {systemInfo.colorScheme}
              </div>
              <div>
                <strong>Body Background:</strong> {systemInfo.bodyBackground}
              </div>
              <div>
                <strong>Body Color:</strong> {systemInfo.bodyColor}
              </div>
              <div className="md:col-span-2">
                <strong>HTML Classes:</strong> {systemInfo.htmlClasses || 'none'}
              </div>
              <div className="md:col-span-2">
                <strong>Body Classes:</strong> {systemInfo.bodyClasses || 'none'}
              </div>
              <div className="md:col-span-2">
                <strong>User Agent:</strong> {systemInfo.userAgent}
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Testing Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Change your device to Dark Mode (System Settings → Display → Dark Mode)</li>
            <li>Refresh this page</li>
            <li>The page should remain light even though your system is dark</li>
            <li>Check the logs below for detailed system information</li>
            <li>Copy or download the logs to share with the developer</li>
          </ol>
        </div>

        {/* Logs Section */}
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Debug Logs</h2>
            <div className="space-x-2">
              <button 
                onClick={copyLogs}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Copy Logs
              </button>
              <button 
                onClick={downloadLogs}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Download Logs
              </button>
            </div>
          </div>
          <div className="font-mono text-xs max-h-96 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="mb-1">{log}</div>
            ))}
          </div>
        </div>

        {/* Test Actions */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Test Actions</h2>
          <div className="space-x-4">
            <button 
              onClick={updateSystemInfo}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh System Info
            </button>
            <button 
              onClick={() => {
                addLog('🔄 Manual refresh triggered');
                updateSystemInfo();
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Test Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
