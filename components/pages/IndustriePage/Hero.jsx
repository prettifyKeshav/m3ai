import React from 'react'
import Banner from '@/components/Banner'

const Hero = () => {
    return (
        <>
            <Banner
                className="industries-banner"
                mediaSrc="video"
                videoSrc={"/assets/video/common-banner.mp4"}
                h3tag="For all industries, we are ready to deliver enterprise‑grade automation, cutting redundant workflows and unlocking productivity at scale"
            />
        </>
    )
}

export default Hero