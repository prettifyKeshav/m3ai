import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductSection = () => {

    const Products_data = [
        {
            id: 1,
            layout: "image-left",
            productimage: "/assets/images/product/product1.png",
            content: {
                title: "CREDDT",
                subtitle: "Commercial Real Estate Due Diligence Tools",
                description:
                    "Commercial Real Estate Due Diligence Tools a host of tools to automate loan sizing, underwriting and securitization. Employs LLMs and vision-language models to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts"
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },
        {
            id: 2,
            layout: "image-right",
            productimage: "/assets/images/product/product2.jpg",
            content: {
                title: "Product 2",
                subtitle: "Lorem Ipsum is simply dummy text",
                description:
                    "Commercial Real Estate Due Diligence Tools a host of tools to automate loan sizing, underwriting and securitization. Employs LLMs and vision-language models to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts"
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },
        {
            id: 3,
            layout: "image-left",
            productimage: "/assets/images/product/product1.png",
            content: {
                title: "CREDDT",
                subtitle: "Commercial Real Estate Due Diligence Tools",
                description:
                    "Commercial Real Estate Due Diligence Tools a host of tools to automate loan sizing, underwriting and securitization. Employs LLMs and vision-language models to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts"
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },

        /* 🔥 NEW ITEMS */

        {
            id: 4,
            layout: "image-right",
            productimage: "/assets/images/product/product2.jpg",
            content: {
                title: "AutoUnderwrite AI",
                subtitle: "AI-Powered Loan Underwriting Platform",
                description:
                    "Automates credit analysis and risk assessment using large language models and financial data extraction to speed up underwriting decisions with higher accuracy."
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },
        {
            id: 5,
            layout: "image-left",
            productimage: "/assets/images/product/product1.png",
            content: {
                title: "RentRoll Vision",
                subtitle: "Automated Rent Roll Intelligence",
                description:
                    "Extracts and normalizes rent roll data from PDFs, spreadsheets, and scanned documents using vision-language models for faster deal analysis."
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },
        {
            id: 6,
            layout: "image-right",
            productimage: "/assets/images/product/product2.jpg",
            content: {
                title: "DealStruct Pro",
                subtitle: "Smart Deal Structuring & Modeling",
                description:
                    "Enables dynamic deal modeling, cash-flow forecasting, and scenario analysis with AI-driven insights for commercial real estate investments."
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        },
        {
            id: 7,
            layout: "image-left",
            productimage: "/assets/images/product/product1.png",
            content: {
                title: "SecureDocs AI",
                subtitle: "Intelligent Document Review & Compliance",
                description:
                    "Automatically reviews legal and financial documents to detect risks, inconsistencies, and compliance issues using advanced AI models."
            },
            button: {
                text: "Read More",
                link: "/product-detail"
            },
            animation: {
                image: "fade-right",
                content: "fade-left"
            }
        }
    ]


    return (
        <div className="product-secA">
            <div className="container">

                {Products_data.map((item) => {
                    const isImageLeft = item.layout === "image-left"
                    return (
                        <div key={item.id} className={isImageLeft ? "flex-box1" : "flex-box2"} >
                            {/* Image Left */}
                            {isImageLeft && (
                                <div className="flex-box-item1 flex-box-item" data-animate={item.animation.image} >
                                    <figure>
                                        <Image src={item.productimage} width={522} height={318} alt="product img" />
                                    </figure>
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex-box-item2 flex-box-item" data-animate={item.animation.content} >
                                <div className="heading">
                                    <h2>{item.content.title}</h2>
                                    <p>{item.content.subtitle}</p>
                                </div>

                                <p className="desc">
                                    {item.content.description}
                                </p>

                                <Link href={item.button.link} className="btn" data={item.button.text} >
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} viewBox="0 0 1024 1024" > <path fill="#000" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z" /> <path fill="#000" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z" /></svg>
                                    </figure>
                                </Link>
                            </div>

                            {/* Image Right */}
                            {!isImageLeft && (
                                <div className="flex-box-item1 flex-box-item" data-animate={item.animation.image} >
                                    <figure>
                                        <Image src={item.productimage} width={522} height={318} alt="product img" />
                                    </figure>
                                </div>
                            )}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ProductSection
