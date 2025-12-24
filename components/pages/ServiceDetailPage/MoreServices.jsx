"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const MoreServices = () => {

    const More_Service_Data = [
        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/1.svg",
            "title": "AI Workflows Orchestration",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },
        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/2.svg",
            "title": "Data Intelligence",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },
        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/3.svg",
            "title": "AData Analytics",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/4.svg",
            "title": "AI Native Product Development",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/5.svg",
            "title": "Agentic Architecture",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/service-detail",
            "icon": "/assets/images/service/listing/6.svg",
            "title": "Custom SLMs",
            "description": "AI workflows orchestration empowers organizations to automate.",
        }
    ]

    return (
        <>
            <div className="service-detail-secC">
                <div className="container">
                    <div className="heading">
                        <h2>More Services</h2>
                    </div>

                    <div className="more-services-swiper">

                        <div className="swiper-nav">
                            <button className='more-services-left-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="M31 36L19 24l12-12"></path></svg>
                            </button>
                            <button className='more-services-right-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="m19 12l12 12l-12 12"></path></svg>
                            </button>
                        </div>


                        <Swiper
                            loop={false}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                540: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                991: { slidesPerView: 3 },
                                1200: { slidesPerView: 3 },
                            }}
                            spaceBetween={20}
                            speed={900}
                            pagination={{ type: "fraction" }}
                            navigation={{
                                prevEl: ".more-services-left-swiper-slide",
                                nextEl: ".more-services-right-swiper-slide",
                            }}
                            modules={[Navigation]}
                            data-animate="fade-up"
                        >
                            {
                                More_Service_Data.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Link href="/" className='grid-box-item'>
                                                <figure className='main-icon'>
                                                    <Image src={item.icon} width={54} height={54} alt="ico" ></Image>
                                                </figure>
                                                <div className="content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    <figure>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 1024 1024"><path fill="#000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path><path fill="#000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"></path></svg>
                                                    </figure>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreServices