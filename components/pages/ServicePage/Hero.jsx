import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Banner
                className='service-banner'
                videoSrc={"/assets/video/service-banner.mp4"}
                h1tag={"Services"}
                h3tag2={"Simplifying work to amplify outcomes"}
            />
        </>
    )
}

export default Hero