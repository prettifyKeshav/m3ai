import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Banner
                className='service-banner'
                // videoSrc={"/assets/video/service-banner.mp4"}
                bannerImage={"/assets/images/service/service-detail-banner.jpg"}
                h1tag={"Product Detail Page"}
                h3tag2={"Streamlining Complexity. Accelerating Outcomes."}
            />
        </>
    )
}

export default Hero