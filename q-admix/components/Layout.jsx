import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import QuantumCursor from "./ui/QuantumCursor"
import BackToTop from "./ui/BackToTop"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Q-AdMix™ - Hybrid Quantum AI for Ad Optimization</title>
                <meta name='description' content="Maximize your ad ROI with Q-AdMix's hybrid quantum-classical AI, reducing wasted spend and optimizing ad placements across platforms." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <QuantumCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Layout