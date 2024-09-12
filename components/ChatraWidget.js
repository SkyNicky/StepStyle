// components/ChatraWidget.js
import { useEffect } from 'react';

export default function ChatraWidget() {
  useEffect(() => {
    (function(d, w, c) {
        w.ChatraID = 'YdJqWgrXi9QDZu9Tu';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
  }, []);
  return null; // Este componente não renderiza nada visível
}
