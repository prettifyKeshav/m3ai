"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BusinessImpact = () => {

    const productsData = [
        {
            id: 1,
            number: "01",
            description: "Faster processing times with zero errors"
        },
        {
            id: 2,
            number: "02",
            description: "Faster processing times with zero errors"
        },
        {
            id: 3,
            number: "03",
            description: "Faster processing times with zero errors"
        },
        {
            id: 4,
            number: "04",
            description: "Faster processing times with zero errors"
        },
        {
            id: 5,
            number: "05",
            description: "Faster processing times with zero errors"
        },
        {
            id: 6,
            number: "06",
            description: "Faster processing times with zero errors"
        },
    ];

    return (
        <>
            <div className="service-detail-secA">
                <div className="container">
                    <div className="flex-box">
                        <div className="flex-box-item">
                            <h4>Business Impact</h4>
                        </div>
                        <div className="flex-box-item">
                            <div className="product-swiper">
                                <div className="swiper-nav">
                                    <button className='products-left-swiper-slide'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"></path></g></svg>
                                    </button>
                                    <button className='products-right-swiper-slide'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                                    </button>
                                </div>

                                <Swiper
                                    loop={false}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    speed={900}
                                    pagination={{ type: "fraction" }}
                                    navigation={{
                                        prevEl: ".products-left-swiper-slide",
                                        nextEl: ".products-right-swiper-slide",
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    {productsData.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <h4>{item.number}</h4>
                                            <p>{item.description}</p>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessImpact