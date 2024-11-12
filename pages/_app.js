import React from 'react'
import '../styles/globals.css'
import '../styles/Header.module.css'

export default function MyApp({ Component, pageProps })
{
    return <Component {...pageProps} />;
 }