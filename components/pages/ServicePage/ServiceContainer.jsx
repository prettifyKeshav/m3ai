import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ServiceContainer = () => {

    const Service_Data = [
        {
            "link": "/",
            "icon": "/assets/images/service/listing/1.svg",
            "title": "AI Workflows Orchestration",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },
        {
            "link": "/",
            "icon": "/assets/images/service/listing/2.svg",
            "title": "Data Intelligence",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },
        {
            "link": "/",
            "icon": "/assets/images/service/listing/3.svg",
            "title": "AData Analytics",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/",
            "icon": "/assets/images/service/listing/4.svg",
            "title": "AI Native Product Development",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/",
            "icon": "/assets/images/service/listing/5.svg",
            "title": "Agentic Architecture",
            "description": "AI workflows orchestration empowers organizations to automate.",
        },

        {
            "link": "/",
            "icon": "/assets/images/service/listing/6.svg",
            "title": "Custom SLMs",
            "description": "AI workflows orchestration empowers organizations to automate.",
        }
    ]

    return (
        <div className="service-secA">
            <div className="container">
                <div className="grid-box">
                    {
                        Service_Data.map((item, index) => {
                            return (
                                <Link href={item.link} key={index} className="grid-box-item">
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
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ServiceContainer