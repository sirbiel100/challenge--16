import React from 'react';
import Head from 'next/head';
import Main from '../components/main.jsx';
import Credits from '../components/credits.jsx';
import "./styles.css"

function App(){
    return (
        <>
            <Head>
                <meta name='description' content='Profile card component made with next js' />
                <link rel='icon' href='../favicon-32x32.png' alt='icone' />
                <title>Profile Card Component</title>
            </Head>
            <Main />
            <Credits />
        </>
    )
}

export default App