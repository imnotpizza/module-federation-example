import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const getRemoteComponent = async () => {
  const module = await import('home/Button');
  return module.default;
};

export default function RemoteComponent() {
  useEffect(() => {
    getRemoteComponent().then((RemoteButton) => {
      const remoteRoot = document.getElementById('remote-root');
      const button = React.createElement(RemoteButton);
      // ReactDOM.render(button, remoteRoot);
      const root = createRoot(remoteRoot);
      root.render(button);
    });
  }, []);

  return <div id="remote-root"></div>;
}
