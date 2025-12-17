"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



const ProductSection = () => {
    const productsData = [
        {
            id: 1,
            title: "Financial Analysis Engine",
            description: "Cash flow projections, valuation models, and cap rate metrics."
        },
        {
            id: 2,
            title: "Automated Document Review",
            description: "Lease summaries, rent rolls, & compliance reports"
        },
        {
            id: 3,
            title: "Automated Document Review",
            description: "Lease summaries, rent rolls, & compliance reports"
        },
        {
            id: 4,
            title: "Automated Document Review",
            description: "Lease summaries, rent rolls, & compliance reports"
        }
    ];


    return (
        <>
            <div className="home-secC">
                <div className="container">
                    <div className="heading" data-animate="zoom-in">
                        <h2>M3Ai  Products</h2>
                    </div>

                    <div className="flex-box">
                        <div className="flex-box-item" data-animate="fade-up">
                            <figure>
                                <Image className='up-im' src="/assets/images/home/Products-sec1.png" height={382} width={453} alt="3d img"></Image>
                                <Image className='lw-im' src="/assets/images/home/Products-sec2.png" height={382} width={453} alt="3d img"></Image>
                            </figure>
                        </div>

                        <div className="flex-box-item" data-animate="fade-up">
                            <div className="heading">
                                <h3>CREDDT</h3>
                                <p>Commercial Real Estate Due Diligence Tools</p>
                            </div>
                            <p className='description'>We realized that if we could build AI systems like CREDDT to automate these kinds of  tedious workflows, we and other companies could spend more time on harder, more  thoughtful work. That insight became the foundation for our AI ecosystem.</p>

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
                                    slidesPerView={2}
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
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>

                            <Link href="" className='btn' data="Read More">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024"><path fill="#000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path><path fill="#000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"></path></svg>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSection