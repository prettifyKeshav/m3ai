import React from 'react'
import "@/styles/home/home.css"

import Hero from './Hero'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'

const HomePage = () => {
    return (
        <>
            <main>
                <Hero />
                <AboutSection />
                <ServiceSection />
            </main>
        </>
    )
}

export default HomePage