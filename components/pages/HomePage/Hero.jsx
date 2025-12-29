import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Banner
                className='home-banner'
                mediaSrc="video"
                videoSrc={"/assets/video/home-banner.mp4"}
                h3tag={"Where Complex Challenges"}
                h1tag={"Meet M3AI"}
            />
        </>
    )
}

export default Hero 