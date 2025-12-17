import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Banner
                className='about-banner'
                videoSrc={"/assets/video/about-banner.mp4"}
                h1tag={"About M3Ai"}
                h3tag2={"Enterprise AI. Engineered for real-world impact"}
            />
        </>
    )
}

export default Hero