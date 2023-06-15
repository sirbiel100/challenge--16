import React from 'react';
import Head from 'next/head';
import Main from '../components/main.jsx';
import Credits from '../components/credits.jsx';
import Image from 'next/image.js';
import BgRight from '/public/bg-pattern-bottom.svg'
import BgLeft from '/public/bg-pattern-top.svg'
import indexStyle from '../styles/index.module.css';

function App(){
    return (
        <>
            <Head>
                <meta name='description' content='Profile card component made with next js' />
                <link rel='icon' href='favicon-32x32.png' alt='icone' />
                <title>Profile Card Component</title>
            </Head>
            <Image
            src={BgRight}
            width={100}
            height={100}
            className={indexStyle.BgRight}
            />
            <Image
            src={BgLeft}
            width={100}
            height={100}
            className={indexStyle.BgLeft}
            />
            <Main />
            <Credits />
        </>
    )
}

export default App