"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServiceSection = () => {

    const Service_data = [
        {
            "link": "",
            "image": "/assets/images/service/service-img1.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",

        },
        {
            "link": "",
            "image": "/assets/images/service/service-img2.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",

        },
        {
            "link": "",
            "image": "/assets/images/service/service-img3.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",

        },
        {
            "link": "",
            "image": "/assets/images/service/service-img2.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
        },
        {
            "link": "",
            "image": "/assets/images/service/service-img3.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",

        },
        {
            "link": "",
            "image": "/assets/images/service/service-img2.jpg",
            "title": "AI workflows orchestration",
            "description": "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
        }
    ]

    return (
        <>
            <div className="home-secB">
                <div className="container">
                    <div className="heading" data-animate="zoom-in">
                        <h2>Where AI Automation
                            Accelerates Your Growth</h2>
                    </div>

                    <Swiper
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            540: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            991: { slidesPerView: 1.5 },
                            1200: { slidesPerView: 1.5 },
                        }}
                        spaceBetween={40}
                        speed={900}
                        centeredSlides={true}
                        pagination={{ type: "fraction" }}
                        navigation={{
                            prevEl: ".service-left-swiper-slide",
                            nextEl: ".service-right-swiper-slide",
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        data-animate="zoom-in"
                    >
                        {
                            Service_data.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Link href={item.link}>
                                            <figure>
                                                <Image src={item.image} width={780} height={400} alt="service img" />
                                                <figcaption>
                                                    <div className="left">
                                                        <h4>{item.title}</h4>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024">
                                                            <path fill="#000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path>
                                                            <path fill="#000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"></path>
                                                        </svg>
                                                    </div>
                                                </figcaption>
                                                <h3>Service</h3>
                                            </figure>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }


                        {/* Custom Navigation */}
                        <div className="bottom-nav">
                            <button className='service-left-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"></path></g></svg>
                            </button>
                            <button className='service-right-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                            </button>
                        </div>
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default ServiceSection