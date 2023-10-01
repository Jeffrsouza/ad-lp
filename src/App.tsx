import './font.css';
import './global.css';
import styles from './App.module.css';
import { Contact } from './components/Contact/Contact';
import { Faq } from './components/Faq/Faq';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Prices } from './components/Prices/Prices';
import { Services } from './components/Services/Services';
import { Benefits } from './components/Benefits/Benefits';
import { Footer } from './components/Footer/Footer';
import { useEffect, useState } from 'react';

export function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  function getCurrentDimension() {
    console.log({
      width: window.innerWidth,
      height: window.innerHeight
    })
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <Services />
      <Benefits />
      <Prices />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

