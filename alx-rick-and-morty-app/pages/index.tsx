import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Testing ErrorBoundary
      </h1>

      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
