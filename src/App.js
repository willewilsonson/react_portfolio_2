import './App.css';
import Start from './components/Start';
import Menu from './components/Menu';
// import SectionSelector from './components/SectionSelector';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap/all';

function App() {
  const[isStarted, setIsStarted] = useState(false);
  const[showSection, setShowSection] = useState('');
  const[color, setColor] = useState('');
  const appColor = useRef();

  useEffect(() => {
    console.log(color);
    gsap.to(appColor.current, {
      duration: 1,
      background: color,
    })
  }, [color]);

  return (
    <section className="App" ref={appColor}>
      <Start isStarted={isStarted} setIsStarted={setIsStarted} setShowSection={setShowSection} setColor={setColor}/>
      <Menu showSection={showSection} setShowSection={setShowSection}/> 
      {/* {
        isStarted && showSection === '' ? <Menu showSection={showSection} setShowSection={setShowSection}/> 
        : isStarted && showSection !== '' ? <SectionSelector showSection={showSection} setShowSection={setShowSection}/> 
        : false
      } */}
    </section>
  );
}

export default App;
