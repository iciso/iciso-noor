import { NextResponse } from "next/server"

export async function GET() {
  // Create the embed script
  const script = `
    (function() {
      // Create a container for styles
      const styleEl = document.createElement('style');
      styleEl.textContent = \`
        #noor-chat-container iframe {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      \`;
      document.head.appendChild(styleEl);
      
      // Get the container
      const container = document.getElementById('noor-chat-container');
      if (!container) {
        console.error('Noor Chat: No container element found with id "noor-chat-container"');
        return;
      }
      
      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = '${process.env.NEXT_PUBLIC_BASE_URL || ""}/embed-frame';
      iframe.title = 'Noor Chat';
      iframe.allow = 'microphone';
      iframe.setAttribute('loading', 'lazy');
      
      // Add iframe to container
      container.appendChild(iframe);
      
      // Add message listener for potential resize events
      window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'noor-chat-resize') {
          iframe.style.height = e.data.height + 'px';
        }
      });
    })();
  `

  return new NextResponse(script, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
