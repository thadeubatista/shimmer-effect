import React, { useState, useEffect } from 'react';
import Shimmer from './components/Shimmer';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Shimmer isLoading={isLoading} />
    </>
  );
};

export default App;
