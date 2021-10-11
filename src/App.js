import './App.css';
import Start from './components/Start';
import Menu from './components/Menu';
import SectionSelector from './components/SectionSelector'
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap/all';

function App() {
  const[isStarted, setIsStarted] = useState(false);
  const[showSection, setShowSection] = useState('');
  const[color, setColor] = useState('#f5f8eb');
  const appColor = useRef();


  useEffect(() => {
    gsap.to(document.body, {
      duration: 1,
      background: color,
    })
  }, [color]);

  return (
    <section className="App" ref={appColor}>
      <Start isStarted={isStarted} setIsStarted={setIsStarted} setShowSection={setShowSection} setColor={setColor}/>
      <Menu showSection={showSection} setIsStarted={setIsStarted} setShowSection={setShowSection} setColor={setColor}/> 
      {
        isStarted && showSection === '' ? <Menu showSection={showSection} setShowSection={setShowSection} setColor={setColor}/> 
        : isStarted && showSection !== '' ? <SectionSelector showSection={showSection} setShowSection={setShowSection} setColor={setColor}/> 
        : false
      }
    </section>
  );
}

export default App;
