import React, { useEffect } from 'react';

interface ChatWidgetProps {
  enabled?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled) {
      console.log('[CHAT WIDGET] Disabled - not loading');
      return;
    }

    console.log('[CHAT WIDGET] Loading...');

    // Remove any existing widget first
    const existingWidget = document.querySelector('script[data-widget-id="680f48b10f7b390172882aea"]');
    if (existingWidget) {
      existingWidget.remove();
      console.log('[CHAT WIDGET] Removed existing widget');
    }

    // Load chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '680f48b10f7b390172882aea');
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
    
    console.log('[CHAT WIDGET] Script loaded successfully');

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Also remove any rendered widget elements
      const widgetElements = document.querySelectorAll('[data-widget-id="680f48b10f7b390172882aea"], [id*="leadconnector"], [class*="leadconnector"]');
      widgetElements.forEach(el => el.remove());
      console.log('[CHAT WIDGET] Cleaned up completely');
    };
  }, [enabled]);

  return null; // This component doesn't render anything visible
};

export default ChatWidget;