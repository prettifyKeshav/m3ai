
"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {

    const Features_Data = [
        { content: 'Advanced OCR for Data Extraction' },
        { content: 'Automated Securitization Data Tape Generation' },
        { content: 'Automated Sizing Calculations: EGI, NOI, OpEx' },
        { content: 'Multi-input Broker Package Generation' },
        { content: 'Auto Categorization of Income/Expense Line Items' },
        { content: 'Dashboard for Workflow Overview and Review' },
        { content: 'Automated Securitization Data Tape Generation' },
        { content: 'Automated Sizing Calculations: EGI, NOI, OpEx' },
        { content: 'Multi-input Broker Package Generation' },
        { content: 'Auto Categorization of Income/Expense Line Items' },
        { content: 'Dashboard for Workflow Overview and Review' }
    ]

    return (
        <>
            <div className="banner product-detail-banner">
                <div className="bg">
                    <figure>
                        <video className="bg-media" playsInline autoPlay muted loop> <source src="/assets/video/product-detail.mp4" type="video/mp4" /> </video>
                    </figure>

                    <div className="banner-wrapper">
                        <div className="container-fluid">
                            <div className="heading" data-animate="fade-up">
                                <h1>CREDDT</h1>
                                <h3>Commercial Real Estate Due Diligence Tools</h3>
                            </div>

                            <div className="features-swiper-slider">
                                <div className="head" data-animate="fade-up">
                                    <h3>Features</h3>
                                    <div className="swiper-nav">
                                        <button className='our-work-left-swiper-slide'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="M31 36L19 24l12-12"></path></svg>
                                        </button>
                                        <button className='our-work-right-swiper-slide'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="m19 12l12 12l-12 12"></path></svg>
                                        </button>
                                    </div>
                                </div>

                                <Swiper
                                    loop={false}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        540: { slidesPerView: 3 },
                                        768: { slidesPerView: 4 },
                                        991: { slidesPerView: 5 },
                                        1200: { slidesPerView: 6 },
                                    }}
                                    spaceBetween={20}
                                    speed={900}
                                    pagination={{ type: "fraction" }}
                                    navigation={{
                                        prevEl: ".our-work-left-swiper-slide",
                                        nextEl: ".our-work-right-swiper-slide",
                                    }}
                                    modules={[Navigation]}
                                    data-animate="fade-up"
                                >
                                    {
                                        Features_Data.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <p>{item.content}</p>
                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                </Swiper>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero