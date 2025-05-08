import React, { Suspense } from 'react';
import Header from './components/Header';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>欢迎使用模块联邦示例</h2>
        <Suspense fallback="Loading...">
          <RemoteButton />
        </Suspense>
      </div>
    </div>
  );
};

export default App; 