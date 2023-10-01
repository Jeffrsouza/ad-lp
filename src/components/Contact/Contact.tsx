import styles from './Contact.module.css';

export function Contact() {
    return (
        <div id='contact' className={styles.container}>
            <h1>Contato</h1>
            <span className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

            <div className={styles.content}>
                <div className={styles.item}>
                    <div>
                        <label className={styles.label}>Nome</label>
                        <br/>
                        <input className={styles.input} placeholder='Maria Helena' />
                    </div>
                    <div>
                        <label className={styles.label}>Empresa</label>
                        <br/>
                        <input className={styles.input} placeholder='Advolve' />
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <label className={styles.label}>E-mail</label>
                        <br/>
                        <input className={styles.input} type='email' placeholder='exemplo@exemplo.com' />
                    </div>
                    <div>
                        <label className={styles.label}>Celular</label>
                        <br/>
                        <input className={styles.input} type='tel' placeholder='+55 (11) 9 1234-4567' />
                    </div>
                </div>
                <div className={styles.itemMsg}>
                        <label className={styles.label}>Mensagem</label>
                        <textarea className={styles.textarea} placeholder='Digite sua mensagem...' />
                </div>
            </div>

            <button>Enviar</button>
        </div>
    )
}