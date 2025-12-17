import React from 'react'
import "@/styles/home/home.css"

import Hero from './Hero'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ProductSection from './ProductSection'
import PoweredImpact from './PoweredImpact'

const HomePage = () => {
    return (
        <>
            <main>
                <Hero />
                <AboutSection />
                <ServiceSection />
                <ProductSection />
                <PoweredImpact />
            </main>
        </>
    )
}

export default HomePage