"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const MoreProducts = () => {

    const More_Product_Data = [
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 1",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 2",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 3",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 4",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 5",
            description: "Lorem Ipsum is simply dummy text",
        },
        {
            link: "/service-detail",
            image: "/assets/images/product/product2.jpg",
            title: "Product 6",
            description: "Lorem Ipsum is simply dummy text",
        },
    ];


    return (
        <>
            <div className="product-detail-secD">
                <div className="container">
                    <div className="heading" data-animate="zoom-in">
                        <h2>More Product</h2>
                    </div>

                    <div className="more-product-swiper">

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
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                540: { slidesPerView: 3 },
                                768: { slidesPerView: 1.2 },
                                991: { slidesPerView: 2 },
                                1200: { slidesPerView: 2 },
                            }}
                            spaceBetween={50}
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
                                More_Product_Data.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Link href="/" className='grid-box-item'>
                                                <figure>
                                                    <Image src={item.image} width={522} height={318} alt="ico" ></Image>
                                                </figure>
                                                <figcaption>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </figcaption>
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

export default MoreProducts