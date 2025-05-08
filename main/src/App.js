import React, { Suspense } from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteHeader = React.lazy(() => import('host/Header'));

const App = () => {
  return (
    <div>
      <RemoteHeader title="Main Application" />
      <div style={{ padding: '20px' }}>
        <h2>欢迎使用模块联邦示例</h2>
        <Suspense fallback="Loading...">
          <RemoteButton text="Remote Button" />
        </Suspense>
      </div>
    </div>
  );
};

export default App; 