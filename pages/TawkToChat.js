import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const s0 = document.getElementsByTagName('script')[0];
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6589780d70c9f2407f8333fc/1higfptja';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null;
};

export default TawkToChat;