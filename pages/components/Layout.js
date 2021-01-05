import Link from "next/link"
import styles from "../../styles/Layout.module.css"

export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Link href="/"><a className={styles.logo}><h1>w3mind.</h1><h3 className={styles.subtitle}>Desenvolvimento de sites<br /> minimalistas de auta performace</h3></a></Link>
                    </div>
                    <div className="col-4">
                        <ul className={styles.menu}>
                            <li><Link href="/servicos"><a>Serviços</a></Link></li>
                            <li><Link href="/blog"><a>Blog</a></Link></li>
                            <li><Link href="/contato"><a className={styles.contactLink}>Contato</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bgYellow}>{children}</div>
        </>
    )
}