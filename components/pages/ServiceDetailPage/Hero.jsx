import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <Banner
            className="service-detail-banner"
            mediaSrc="image"
            imageSrc="/assets/images/service/service-detail-banner.jpg"
            h1tag="AI Workflows Orchestration"
            h3tag2="Streamlining Complexity. Accelerating Outcomes."
        />
    )
}

export default Hero
