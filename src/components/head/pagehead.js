import Head from 'next/head'

export default function PageHead({title}) {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Alfa Tech"/>
            <meta name="language" content="PT"/>
            <meta name="author" content="Julio Nunes Avelar"/>
            <meta name="url" content="https://website-alfa.vercel.app/"/>

            <title>Alfa Tech | {title}</title>
        </Head>
    )
}