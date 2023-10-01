import styles from './Benefits.module.css';
import imgOne from '../../assets/svg/customize.svg';
import { useEffect, useState } from 'react';


export function Benefits() {
    const getCurrentDimension = () => window.innerWidth;

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
            <h4>Benefícios</h4>
            <h1> Conheça os principais benefícios</h1>
            <br />
            <span className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <div className={styles.content}>
                <div>
                    <img src={imgOne} alt='' />
                    <span>Eficiência e Rapidez</span>
                </div>
                <p>
                    A IA permite gerar anúncios em uma fração do tempo que um designer humano levaria,
                    permitindo que você crie, teste e otimize suas campanhas publicitárias de maneira
                    mais rápida e eficiente. Além disso, a IA pode trabalhar 24/7 sem pausas,
                    acelerando ainda mais o processo de produção de conteúdo.
                </p>
            </div>

            <div className={styles.content}>
                {screenSize <= 900 ?
                    <>
                        <div>
                            <img src={imgOne} alt='' />
                            <span>Personalização avançada</span>
                        </div>
                        <p>
                            Com a IA, você pode criar anúncios altamente personalizados, adaptando seu conteúdo para segmentos específicos de público-alvo ou mesmo para indivíduos. Isso aumenta as chances de engajamento e conversão, pois os anúncios ressoam mais com cada espectador.
                        </p>
                    </>
                    :
                    <>
                    <p>
                        Com a IA, você pode criar anúncios altamente personalizados, adaptando seu conteúdo para segmentos específicos de público-alvo ou mesmo para indivíduos. Isso aumenta as chances de engajamento e conversão, pois os anúncios ressoam mais com cada espectador.
                    </p>
                    <div>
                        <img src={imgOne} alt='' />
                        <span>Personalização avançada</span>
                    </div>
                </>
                }
            </div>

            <div className={styles.content}>
                <div>
                    <img src={imgOne} alt='' />
                    <span>Otimização Contínua</span>
                </div>
                <p>
                    Uma IA pode analisar grandes volumes de dados rapidamente para entender o que está funcionando e o que não está em suas campanhas. A partir dessa análise, a IA pode então ajustar automaticamente seus anúncios para melhorar o desempenho, economizando tempo e recursos que seriam necessários para fazer esses ajustes manualmente.
                </p>
            </div>
        </div>
    )
}