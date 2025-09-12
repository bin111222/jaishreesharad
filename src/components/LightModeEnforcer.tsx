"use client";

import { useEffect } from 'react';

export default function LightModeEnforcer() {
  useEffect(() => {
    // Enhanced logging function
    const logSystemInfo = (context: string) => {
      const userAgent = navigator.userAgent;
      const isAndroid = /Android/i.test(userAgent);
      const isMobile = /Mobi|Android/i.test(userAgent);
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const viewport = `${window.innerWidth}x${window.innerHeight}`;
      
      console.log(`[LightModeEnforcer - ${context}]`, {
        timestamp: new Date().toISOString(),
        userAgent: userAgent,
        isAndroid: isAndroid,
        isMobile: isMobile,
        systemTheme: systemTheme,
        viewport: viewport,
        devicePixelRatio: window.devicePixelRatio,
        orientation: window.screen.orientation?.type || 'unknown',
        touchSupport: 'ontouchstart' in window,
        platform: navigator.platform
      });
    };

    // AGGRESSIVE light mode enforcement function
    const enforceLightMode = () => {
      try {
        logSystemInfo('enforceLightMode-start');
        // Remove ALL possible dark mode classes
        const darkClasses = ['dark', 'Dark', 'dark-mode', 'darkMode', 'theme-dark'];
        darkClasses.forEach(className => {
          document.documentElement.classList.remove(className);
          document.body.classList.remove(className);
        });

        // Remove any data attributes that might trigger dark mode
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.removeAttribute('data-color-scheme');
        document.body.removeAttribute('data-theme');
        document.body.removeAttribute('data-color-scheme');

        // Force color scheme AGGRESSIVELY
        document.documentElement.style.colorScheme = 'light only';
        document.documentElement.style.setProperty('--color-scheme', 'light only');
        document.documentElement.style.setProperty('color-scheme', 'light only');
        document.body.style.colorScheme = 'light only';
        
        // Force color scheme on ALL elements
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
          (element as HTMLElement).style.colorScheme = 'light only';
        });
        
        // Override any CSS custom properties
        document.documentElement.style.setProperty('--theme', 'light');
        document.documentElement.style.setProperty('--mode', 'light');
        document.documentElement.style.setProperty('--scheme', 'light');

        // Force background and text colors on all elements
        document.documentElement.style.backgroundColor = '#FFFFFF';
        document.documentElement.style.color = '#1F2937';
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.color = '#1F2937';

        // Override any CSS custom properties that might be dark
        document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
        document.documentElement.style.setProperty('--text-color', '#1F2937');
        document.documentElement.style.setProperty('--background', '#FFFFFF');
        document.documentElement.style.setProperty('--foreground', '#1F2937');

        // Force light mode on all elements with dark classes
        const darkElements = document.querySelectorAll('.dark, [data-theme="dark"], .dark-mode, [class*="dark"]');
        darkElements.forEach(element => {
          (element as HTMLElement).style.backgroundColor = '#FFFFFF';
          (element as HTMLElement).style.color = '#1F2937';
          (element as HTMLElement).style.colorScheme = 'light only';
        });

        // Override system preferences aggressively
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // Force override even when system is in dark mode
          document.documentElement.style.setProperty('--color-scheme', 'light only');
          document.documentElement.style.setProperty('color-scheme', 'light only');
        }

        // Mobile-specific overrides
        if (window.innerWidth <= 768) {
          document.documentElement.style.backgroundColor = '#FFFFFF';
          document.body.style.backgroundColor = '#FFFFFF';
        }

        // Log final state
        const finalState = {
          htmlClasses: document.documentElement.className,
          bodyClasses: document.body.className,
          htmlColorScheme: document.documentElement.style.colorScheme,
          bodyColorScheme: document.body.style.colorScheme,
          bodyBackground: getComputedStyle(document.body).backgroundColor,
          bodyColor: getComputedStyle(document.body).color,
          systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        };
        
        console.log('✅ Light mode enforced successfully', finalState);
        logSystemInfo('enforceLightMode-success');
      } catch (error) {
        console.error('❌ Light mode enforcement error:', error);
        logSystemInfo('enforceLightMode-error');
      }
    };

    // Enforce light mode immediately
    enforceLightMode();

    // Set up aggressive monitoring
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      console.log('🔄 System theme changed, enforcing light mode');
      logSystemInfo('system-theme-changed');
      enforceLightMode();
    };

    const handleFocus = () => {
      console.log('👁️ Window focused, enforcing light mode');
      logSystemInfo('window-focused');
      enforceLightMode();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log('👀 Page visible, enforcing light mode');
        logSystemInfo('page-visible');
        enforceLightMode();
      }
    };

    const handleResize = () => {
      console.log('📐 Window resized, enforcing light mode');
      logSystemInfo('window-resized');
      enforceLightMode();
    };

    const handleOrientationChange = () => {
      console.log('🔄 Orientation changed, enforcing light mode');
      logSystemInfo('orientation-changed');
      setTimeout(enforceLightMode, 100); // Small delay for orientation to settle
    };

    // Add all event listeners
    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set up interval to continuously enforce (as backup)
    const intervalId = setInterval(() => {
      // Only enforce if we detect dark mode classes
      if (document.documentElement.classList.contains('dark') || 
          document.body.classList.contains('dark') ||
          document.documentElement.getAttribute('data-theme') === 'dark') {
        console.log('🚨 Dark mode detected, enforcing light mode');
        logSystemInfo('dark-mode-detected-interval');
        enforceLightMode();
      }
    }, 1000); // Check every second

    // Cleanup
    return () => {
      console.log('🧹 LightModeEnforcer cleanup');
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalId);
    };
  }, []);

  // This component doesn't render anything
  return null;
}
