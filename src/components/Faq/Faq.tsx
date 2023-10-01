import { useState } from 'react';
import { CardFaqType } from '../../types/CardFaqType';
import styles from './Faq.module.css';
import { Plus } from '@phosphor-icons/react';

const cardContent: CardFaqType[] = [
    {
        title: 'Lorem ipsum is a placeholder text commonly?',
        content: 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. It is derived from Latin literature and has been used since the 16th century. The text is taken from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum'
    },
    {
        title: 'Lorem ipsum is a placeholder text commonly?',
        content: 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. It is derived from Latin literature and has been used since the 16th century. The text is taken from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum'
    },
    {
        title: 'Lorem ipsum is a placeholder text commonly?',
        content: 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. It is derived from Latin literature and has been used since the 16th century. The text is taken from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum'
    },
    {
        title: 'Lorem ipsum is a placeholder text commonly?',
        content: 'Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. It is derived from Latin literature and has been used since the 16th century. The text is taken from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum'
    },
]

export function Faq() {
    return (
        <div id='faq' className={styles.container}>
            <h1>FAQ</h1>

            <div className={styles.content}>
                {
                    cardContent.map(content => <Card key={content.title} {...content} />)
                }
            </div>
        </div>
    )
}

function Card(props: CardFaqType) {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    return (
        <div className={`${styles.cardContent} ${isOpen && styles.contentActive}`}>
            <div>
                <h3 className={`${isOpen && styles.textActive}`}>
                    {props.title}
                </h3>
                <Plus
                    className={`${styles.cardIcon} ${isOpen && styles.cardIconActive}`}
                    onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && <span>{props.content}</span>}
        </div>
    )
}