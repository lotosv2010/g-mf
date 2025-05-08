import React, { Suspense } from 'react';
import Button from './components/Button';

const RemoteHeader = React.lazy(() => import('host/Header'));

const App = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <RemoteHeader title="Remote Application" />
      </Suspense>
      <div style={{ padding: '20px' }}>
        <h2>欢迎使用模块联邦示例</h2>
        <Button text="Self Button" />
      </div>
    </div>
  );
};

export default App; 