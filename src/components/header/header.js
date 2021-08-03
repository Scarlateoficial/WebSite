import Link from 'next/link'

export default function Header(){ 
    return (
        <header className="header">
            <nav> 
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Produtos</Link></li>
                    <li><Link href="/soluctions">Soluções</Link></li>
                    <li><Link href="/support">Suporte</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">Sobre Nós</Link></li>
                    <li><Link href="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}