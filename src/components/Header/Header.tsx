import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';
import { useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';

export function Header() {
    const getCurrentDimension = () => window.innerWidth;

    const [isOpen, setIsOpen] = useState<boolean>(false);
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

    return (
        <div className={styles.container}>
            {screenSize > 820 || isOpen ?
                <>
                    {screenSize <= 820 &&
                        <div className={styles.iconClose} >
                            <X onClick={() => setIsOpen(!isOpen)} size={30} color="#fff" />
                        </div>
                    }
                    <div className={`${styles.content}`}>
                        <div>
                            <img src={logo} />
                        </div>
                        <div>
                            <a href="#home" className={styles.link}>
                                <span>Home</span>
                            </a>
                            <a href="#services" className={styles.link}>
                                <span>Serviços</span>
                            </a>
                            <a href="#prices" className={styles.link}>
                                <span>Preços</span>
                            </a>
                            <a href="#faq" className={styles.link}>
                                <span>Faq</span>
                            </a>
                            <a href="#contact" className={styles.link}>
                                <span>Contatos</span>
                            </a>
                        </div>
                        <div>
                            <button className={styles.login}>
                                <span>Login</span>
                            </button>
                            <hr />
                            <button className={styles.sign}>
                                <span> Sign Up</span>
                            </button>
                        </div>
                    </div>
                </>
                : <List size={30} color="#fff" onClick={_ => setIsOpen(!isOpen)} />
            }

        </div>
    )
}