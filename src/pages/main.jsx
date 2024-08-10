import React from 'react'
import { AboutUs, Footer, Header, Intro, SpecialMenu } from '../container';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Footer />
        </>
    )
}

export default Main;
