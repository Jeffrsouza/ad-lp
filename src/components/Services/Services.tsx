import { CardType } from '../../types/CardType';
import styles from './Services.module.css';
import adLand from '../../assets/img/ad-land.png';
import adList from '../../assets/img/ad-list.png';
import adMark from '../../assets/img/ad-mark.png';
import adRun from '../../assets/img/ad-run.png';


const CardInformation: CardType[] = [{
    title: 'ADCrafter',
    content: 'Utilize nossa IA de geração de imagens para transformar ideias em conteúdo visual engajante. Com algoritmos avançados, criamos imagens otimizadas que realçam sua mensagem e atingem eficazmente seu público-alvo.',
    image: adLand,
    isCommingSoon: false,
    isRight: false,
},
{
    title: 'CopyCrafter',
    content: 'Potencialize suas campanhas com nossa IA de geração de textos. Usando avançadas técnicas de linguagem, ela cria textos envolventes, incluindo copys e slogans, otimizados para engajamento e conversão.',
    image: adList,
    isCommingSoon: false,
    isRight: true,
},
{
    title: 'Otimização e run ads',
    content: 'Lorem Ipsum is a placeholder text used in the printing and typesetting industry. It has been in use since the 16th century when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: adMark,
    isCommingSoon: true,
    isRight: false,
},
{
    title: 'Atribuição por incrementalidade',
    content: 'Lorem Ipsum is a placeholder text used in the printing and typesetting industry. It has been in use since the 16th century when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: adRun,
    isCommingSoon: true,
    isRight: true,
},
]

export function Services() {
    return (
        <div className={styles.container}>
            <h4>Serviços</h4>
            <h1>Conheça nossos serviços</h1>
            <span className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <div className={styles.content}>
                {
                    CardInformation.map(info =>
                        info.isRight
                            ? <CardRight key={info.title} {...info} />
                            : <CardLeft key={info.title} {...info} />
                    )
                }
            </div>
        </div>
    )
}

function CardRight(props: CardType) {
    return (
        <div id='services' className={`${styles.card} ${styles.cardRight}`}>
            <div>
                <span className={styles.moreAbout}>Saiba mais +</span>
                <h2>{props.title}</h2>
                <span>{props.content}</span>
            </div>
            <img src={props.image} />
        </div>
    )
}

function CardLeft(props: CardType) {
    return (
        <div className={`${styles.card} ${styles.cardLeft}`}>
            <img src={props.image} />
            <div>
                <span className={styles.moreAbout}>Saiba mais +</span>
                <h2>{props.title}</h2>
                <span>{props.content}</span>
            </div>
        </div>
    )
}