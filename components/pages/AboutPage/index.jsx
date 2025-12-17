import React from 'react'
import Hero from '../AboutPage/Hero'
import "@/styles/about/about.css"
import AboutM3ai from './AboutM3ai'
import VisionMission from './VisionMission'

const AboutPage = () => {
    return (
        <>
            <Hero />
            <AboutM3ai />
            <VisionMission />
        </>
    )
}
export default AboutPage