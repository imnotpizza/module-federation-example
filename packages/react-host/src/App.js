import React, { Suspense } from 'react';
import RemoteComponent from './RemoteComponent';

const RemoteButton = React.lazy(() => import('home/Button'));

const App = () => (
  <div>
    <h1>MFed react-react</h1>
    <Suspense fallback={<div>loading...</div>}>
      <RemoteButton/>
    </Suspense>
  </div>
);

export default App;
