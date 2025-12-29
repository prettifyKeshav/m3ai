"use client"

import React from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useModalStore } from '@/store/modalStore';

const PoweredImpact = () => {

    const openIndustriesDetail = useModalStore((state) => state.openIndustriesDetail)
    const poweredImpactData = [
        {
            id: 1,
            title: "Technology",
            content: [
                "Underwriting Workflow Automation – Automate risk assessment and approvals",
                "Structured Finance Model Optimization – Streamline complex financial models",
                "Treasury Operations Workflow Automation – Simplify cash management and reconciliation",
            ],
            icon: "/assets/images/home/Powered-Impact/3.svg",
        },
        {
            id: 2,
            title: "Banking",
            content: [
                "Digital banking workflow automation",
                "Risk management and compliance optimization",
                "AI-driven financial decision systems",
            ],
            icon: "/assets/images/home/Powered-Impact/2.svg",
        },
        {
            id: 3,
            title: "Logistics",
            content: [
                "Supply chain visibility and optimization",
                "Fleet management automation",
                "Real-time tracking and analytics solutions",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 4,
            title: "Commercial Real Estate",
            content: [
                "Property portfolio performance analytics",
                "Lease and contract workflow automation",
                "Predictive maintenance and asset optimization",
            ],
            icon: "/assets/images/home/Powered-Impact/1.svg",
        },
        {
            id: 5,
            title: "Healthcare",
            content: [
                "Clinical workflow optimization",
                "Patient data analytics and insights",
                "Operational efficiency through automation",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 6,
            title: "Retail & E-Commerce",
            content: [
                "Customer behavior and sales analytics",
                "Inventory and demand forecasting",
                "Omnichannel experience optimization",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 7,
            title: "Manufacturing",
            content: [
                "Production workflow automation",
                "Quality control and predictive analytics",
                "Supply chain and resource optimization",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 8,
            title: "Commercial Real Estate",
            content: [
                "Smart building management systems",
                "Energy efficiency optimization",
                "Asset lifecycle analytics",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 9,
            title: "Healthcare",
            content: [
                "Digital patient engagement platforms",
                "Data-driven clinical decision support",
                "Healthcare operations automation",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 10,
            title: "Retail & E-Commerce",
            content: [
                "Personalized recommendation engines",
                "Marketing automation and insights",
                "Customer retention analytics",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 11,
            title: "Manufacturing",
            content: [
                "Industrial IoT and smart factories",
                "Predictive maintenance systems",
                "Process optimization and automation",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
        {
            id: 12,
            title: "Commercial Real Estate",
            content: [
                "Investment performance analytics",
                "Automated reporting and insights",
                "Portfolio risk assessment tools",
            ],
            icon: "/assets/images/home/Powered-Impact/4.svg",
        },
    ];

    return (
        <>
            <div className="home-secD">
                <div className="container">
                    <div className="heading" data-animate="fade-up">
                        <h2>AI-Powered Impact Across Sectors</h2>
                    </div>

                    <Swiper
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1.2 },
                            540: { slidesPerView: 1.2 },
                            768: { slidesPerView: 2 },
                            991: { slidesPerView: 4 },
                            1200: { slidesPerView: 4 },
                        }}
                        spaceBetween={20}
                        speed={500}
                        pagination={{ type: "fraction" }}
                        navigation={{
                            prevEl: ".powered-impact-prev-swiper-slide",
                            nextEl: ".powered-impact-next-swiper-slide",
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        data-animate="fade-up"
                    >
                        {poweredImpactData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='maincard' onClick={() => openIndustriesDetail(item)}>
                                    <figure>
                                        <Image
                                            src={item.icon}
                                            width={60}
                                            height={60}
                                            alt={item.title}
                                        />
                                    </figure>
                                    <h4>{item.title}</h4>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation */}
                        <div className="bottom-nav">
                            <button className='powered-impact-prev-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"></path></g></svg>
                            </button>
                            <button className='powered-impact-next-swiper-slide'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default PoweredImpact