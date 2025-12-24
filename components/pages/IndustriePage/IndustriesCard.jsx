"use client";

import Image from "next/image";
import { useModalStore } from "@/store/modalStore";

const IndustriesCard = () => {
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
        <div className="industries-card">
            <div className="container">
                <div className="grid-box">
                    {poweredImpactData.map((item) => (
                        <div key={item.id} className="col" data-animate="zoom-in" onClick={() => openIndustriesDetail(item)}>
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
