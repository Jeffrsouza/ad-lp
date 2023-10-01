import styles from './Home.module.css';
import hero from '../../assets/img/ad-hero.png';
import fb from '../../assets/svg/facebook-logo.svg';
import ig from '../../assets/svg/instagram-logo.svg';
import ex from '../../assets/svg/x-logo.svg';


export function Home() {
    return (
        <div id='home' className={styles.container}>
            <div className={styles.content}>
                <h2>Crie anúncios com a Inteligência Artificial</h2>
                <h4>Descubra soluções inovadoras em IA para criar anúncios visuais e textuais impactantes, otimizando suas campanhas e convertendo mais.</h4>
                <button>
                    <span>Teste Grátis</span>
                </button>
                <div className={styles.imgs}>
                    <img src={fb} />
                    <img src={ig} />
                    <img src={ex} />
                </div>
            </div>
            <img src={hero} />
        </div>
    )
}