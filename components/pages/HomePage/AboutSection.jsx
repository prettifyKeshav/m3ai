import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <>
            <div className="home-secA">
                <div className="container">
                    <div className="flex-box">
                        <div className="flex-box-item" data-animate="fade-up">
                            <figure>
                                <Image src="/assets/images/m3ai-icon.svg" height={138} width={397} alt="m3ai icon"></Image>
                            </figure>

                            <p>M3Ai is an enterprise AI company that specializes in high-tech solutions for diverse industry problems. We partner with organizations in banking, consulting, commercial real estate and more to tackle challenges through intelligent automation, predictive insights, and scalable AI platforms.</p>
                            
                            <Link href="">
                                Read More
                                <figure>
                                    <Image src="/assets/icon/top-right.svg" width={16} height={16} alt="top right ico"></Image>
                                </figure>
                            </Link>
                        </div>
                        <div className="flex-box-item" data-animate="fade-up">
                            <div className="col">
                                <h4>Mission</h4>
                                <p>Commitment to understanding the problem, gaining domain expertise, only then exploring a solution.</p>
                            </div>
                            <div className="col">
                                <h4>Vision</h4>
                                <p>Become a trusted and notable AI technology partner across industries, combining deep domain knowledge with powerful automation tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection