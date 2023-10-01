import styles from './Footer.module.css';
import logo from '../../assets/svg/logo.svg';
import fb from '../../assets/svg/facebook-logo.svg';
import ig from '../../assets/svg/instagram-logo.svg';
import ex from '../../assets/svg/x-logo.svg';

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={`${styles.contentLg} ${styles.textCenter}`}>
                <img src={logo} />
                <span>Quer saber mais sobre nossos serviços?</span>
                <button>Teste Grátis</button>
            </div>

            <div className={styles.contentMd}>
                <span>Home</span>
                <span>Serviços</span>
                <span>Benefícios</span>
            </div>


            <div className={styles.contentMd}>
                <span>FAQ</span>
                <span>Contato</span>
                <span>Preços</span>
            </div>

            <div className={styles.contentLg}>
                <span><b>Contato:</b></span>
                <span>exemplo@exemplo.com</span>
                <span>Telefone: +55 11 9 9999-9999</span>
                <br/>
                <div className={styles.imgs}>
                    <img src={fb} />
                    <img src={ig} />
                    <img src={ex} />
                </div>
            </div>
        </div>
    )
}