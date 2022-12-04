import React from 'react';
import { useStocks } from './hooks/useStocks';
import './App.css'

function App() {
  const stocks = useStocks('aapl');
  console.log('stocks are', stocks);
  return (
    <div className="App">
      <p>basic text</p>
    </div>
  )
}

export default App
