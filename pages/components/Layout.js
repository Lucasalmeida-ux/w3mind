import Link from "next/link"
import styles from "../../styles/Layout.module.css"

export default function Layout({ children }) {
    return (
        <>
            <header className="container">
                <div className="row">
                    <div className="col-8">
                        <div className={styles.logo}>
                        <Link href="/"><a><h1>w3mind.</h1><h3 className={styles.subtitle}>Desenvolvimento de sites<br /> minimalistas de auta performace</h3></a></Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className={styles.menu}>
                            <li><Link href="/servicos"><a>Serviços</a></Link></li>
                            <li><Link href="/blog"><a>Blog</a></Link></li>
                            <li><Link href="/precos"><a className={styles.contactLink}>Preços</a></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className={styles.layoutBody}>{children}</div>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                    <div className="col-4">
                        <h3>Sobre nós</h3>
                        <ul>
                            <li>Desenvolvemos sites de performace imbatível</li>
                            <li>Aperfeiçoamos a experiência tanto do usuário quanto do proprietário</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>Blog</h3>
                        <ul>
                        <li><a>O quanto a performace influencia na experiência do usuário</a></li>
                        <li><a>armazenamento de dados</a></li>
                        <li><a>Desenvolvimento da nossa IA</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>Fale Conosco</h3>
                        <p>Pequeno formulário (nome, email, telefone)</p>
                    </div>
                    </div>
                    <div className={styles.copyright}><span>© 2015-2021 - Todos direitos reservados</span></div>
                </div>
            </footer>
        </>
    )
}