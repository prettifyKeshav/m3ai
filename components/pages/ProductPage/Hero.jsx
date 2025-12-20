import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Banner
                className='product-banner'
                mediaSrc="video"
                videoSrc={"/assets/video/product-banner.mp4"}
                h1tag={"Products"}
                h3tag2={"Simplifying work to amplify outcomes"}
            />
        </>
    )
}

export default Hero