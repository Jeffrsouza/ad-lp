import { CardPriceType } from '../../types/CardPriceType';
import styles from './Prices.module.css';
import checkIcon from '../../assets/svg/check.svg';

const cardPrices: Array<CardPriceType> = [
    {
        title: 'Pequenas e Médias Empresas',
        price: 0,
        services: [
            'Redução de Custos',
            'Competitividade',
            'Fácil Integração',
            'Anúncios por mês: X'
        ],
        contactText: 'Contratar'
    },
    {
        title: 'Agências de Marketing',
        price: 0,
        services:
            [
                'Escalabilidade',
                'Inovação',
                'Melhoria Contínua',
                'Anúncios por mês: X',
            ],
        contactText: 'Contratar',
        hasBorder: true
    },
    {
        title: 'Grandes Empresas',
        price: 0,
        services:
            [
                'Criação de anúncios em massa',
                'Personalização em escala',
                'Inteligência de negócios',
                'Anúncios por mês: X',
            ],
        contactText: 'Entre em contato'
    },
]

export function Prices() {
    return (
        <div id='prices' className={styles.container}>
            <h4>Preços</h4>
            <h1>Escolha seu plano</h1>
            <span className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <div className={styles.content}>
                {
                    cardPrices.map(card => <PriceCard key={card.title} {...card} />)
                }
            </div>
        </div>
    )
}

function PriceCard(props: CardPriceType) {
    return (
        <div className={`${styles.cardContainer} ${props.hasBorder && styles.cardBorder}`}>
            <h4>{props.title}</h4>
            <h5>R$<span>{props.price.toFixed(2).padStart(5, '0').replace('.', ',')}</span></h5>
            <span>por mês</span>
            <hr />
            <ul>
                {
                    props.services.map(service => <li><img src={checkIcon} /><span>{service}</span></li>)
                }
            </ul>
            <button>{props.contactText}</button>
        </div>
    )
}