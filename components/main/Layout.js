import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) { 
    return (
        <div>
           <Head lang="en">
            <meta name="description"
            content="Esta es la app de Sofi"/>

            <link rel="icon" href="/favicon.icon"/>

            <meta name="theme-color"
            content="#ffffff"/>

            <meta 
            name="viewport"
            content="width=device-whidth, initial-scale=1, user-scalable=no" />

           </Head>
           <Header/>
           <main>
            {children}
           </main>
           <Footer/>
        </div>
    );
}