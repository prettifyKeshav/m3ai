"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ServiceContainer = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    const Service_Data = [
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
            "title": "Data Analytics",
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

    // Simulate loading delay; replace with actual data fetch logic
    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <SkeletonTheme baseColor="#2020209d" highlightColor="#444">
                <div className="service-secA">
                    <div className="container">
                        <div className="grid-box">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="grid-box-item">
                                    <figure className='main-icon'>
                                        <Skeleton width={54} height={54} />
                                    </figure>
                                    <div className="content">
                                        <h4><Skeleton width={200} /></h4>
                                        <p><Skeleton width={300} count={2} /></p>
                                        <figure>
                                            <Skeleton width={48} height={48} />
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        );
    }

    return (
        <div className="service-secA">
            <div className="container">
                <div className="grid-box">

                    {Service_Data.map((item, index) => (
                        <Link href={item.link} key={index} className="grid-box-item">
                            <figure className='main-icon'>
                                <Image src={item.icon} width={54} height={54} alt={item.title} />
                            </figure>
                            <div className="content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 1024 1024">
                                        <path fill="#000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path>
                                        <path fill="#000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"></path>
                                    </svg>
                                </figure>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceContainer