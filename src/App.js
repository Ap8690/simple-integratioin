import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isWalletLogin, setWalletLogin] = useState(false)
  return (
    <div className="App bg-BackroundColor h-full relative">
      <Header isLogin={isLogin} isWalletLogin={isWalletLogin} />
      <Page isLogin={isLogin} />
    </div>
  );
}

export default App;
