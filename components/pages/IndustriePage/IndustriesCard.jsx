"use client";

import Image from "next/image";
import { useModalStore } from "@/store/modalStore";

const IndustriesCard = () => {
    const openEnquire = useModalStore((state) => state.openEnquire)
    const poweredImpactData = [
        {
            id: 1,
            title: "Technology",
            icon: "/assets/images/home/Powered-Impact/3.svg",
            link: "/technology",
        },
        {
            id: 2,
            title: "Banking",
            icon: "/assets/images/home/Powered-Impact/2.svg",
            link: "/banking",
        },
        {
            id: 3,
            title: "Logistics",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/logistics",
        },
        {
            id: 4,
            title: "Commercial Real Estate",
            icon: "/assets/images/home/Powered-Impact/1.svg",
            link: "/commercial-real-estate",
        },
        {
            id: 5,
            title: "Healthcare",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/healthcare",
        },
        {
            id: 6,
            title: "Retail & E-Commerce",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/retail-ecommerce",
        },
        {
            id: 7,
            title: "Manufacturing",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/manufacturing",
        },
        {
            id: 8,
            title: "Commercial Real Estate",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/commercial-real-estate",
        },
        ,
        {
            id: 9,
            title: "Healthcare",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/healthcare",
        },
        {
            id: 10,
            title: "Retail & E-Commerce",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/retail-ecommerce",
        },
        {
            id: 11,
            title: "Manufacturing",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/manufacturing",
        },
        {
            id: 12,
            title: "Commercial Real Estate",
            icon: "/assets/images/home/Powered-Impact/4.svg",
            link: "/commercial-real-estate",
        },
    ];

    return (
        <div className="industries-card">
            <div className="container">
                <div className="grid-box">
                    {poweredImpactData.map((item) => (
                        <div href={item.link} key={item.id} className="col" data-animate="zoom-in" onClick={openEnquire}>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesCard;
