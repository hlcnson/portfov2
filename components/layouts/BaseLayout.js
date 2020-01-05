import React from 'react'
import Head from 'next/head'
import Header from '../shared/Header'


const BaseLayout = (props) => {
    const {className, children} = props
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='layout-container'>
                <Header />
                <main className={`cover ${className}`}>
                    <div className='wrapper'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default BaseLayout
