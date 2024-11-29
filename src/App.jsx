import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  let refrence = useRef(null);
  useEffect(() => {
    refrence.current.focus();
  }, []);
  return (
    <>
      <input ref={refrence} type="text" />
    </>
  );
}

export default App;
