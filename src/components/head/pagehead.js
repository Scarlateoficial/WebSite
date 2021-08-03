import Head from 'next/head'

export default function PageHead({title}) {
    return (
        <Head>
            <title>Alfa Tech | {title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}