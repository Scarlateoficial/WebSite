import Link from 'next/link'

import Head from '../components/head/pagehead'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Contact (){
    return (
        <div>
            <Head title="Blog" />
            <Header />
            <h1>Olá</h1>
            <Footer />
        </div>
    )
}

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }