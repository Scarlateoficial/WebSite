import Link from 'next/link'

import Head from '../components/head/pagehead'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <div className="container">
      <Head title="Home" />

      <Header />
      <main>
        <h1>Create Next App</h1>
      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}