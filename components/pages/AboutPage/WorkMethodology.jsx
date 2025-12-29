"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const WorkMethodology = () => {

    const Our_Work = [
        {
            "id": "01",
            "title": "Discovery & Requirement Analysis",
            "description": "Engage with stakeholders to define objectives, success metrics, and integration needs",
        },
        {
            "id": "02",
            "title": "Solution Blueprinting",
            "description": "Create BRD/FRD, map workflows, architecture, and compliance frameworks",
        },
        {
            "id": "03",
            "title": "Data Preparation & Model Development ",
            "description": "Clean and structure data; build PoC and custom AI models tailored to enterprise requirements",
        },
        {
            "id": "04",
            "title": "Testing & Deployment",
            "description": "Validate performance, security, and compliance; integrate seamlessly into enterprise systems",
        },
        {
            "id": "05",
            "title": "Monitoring & Continuous Optimization",
            "description": "Track KPIs,retrain models, and implement governance for scalability and sustained performance",
        }
    ]


    return (
        <>
            <div className="about-secC">
                <div className="container">
                    <div className="heading" data-animate="fade-up">
                        <h2>Our Work Methodology</h2>
                    </div>
                    <div className="our-work-swiper">

                        <div className="swiper-nav">
                            <button className='our-work-left-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="M31 36L19 24l12-12"></path></svg>
                            </button>
                            <button className='our-work-right-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.7} d="m19 12l12 12l-12 12"></path></svg>
                            </button>
                        </div>

                        <Swiper
                            loop={false}
                            spaceBetween={20}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                540: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                991: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
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
                                Our_Work.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="card">
                                                <h3>{item.id}</h3>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
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

export default WorkMethodology