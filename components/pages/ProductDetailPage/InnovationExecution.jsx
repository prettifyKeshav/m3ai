"use client"

import React from 'react'
import Image from 'next/image'
import { useModalStore } from '@/store/modalStore'

const InnovationExecution = () => {
    const openVideo = useModalStore((state) => state.openVideo)

    return (
        <>
            <div className="product-details-secA">
                <div className="container">
                    <div className="heading" data-animate="zoom-in">
                        <h2>Where Innovation Meets Execution</h2>
                    </div>

                    <figure data-animate="zoom-in">
                        <Image src="/assets/images/product/Innovation-Execution.jpg" width={798} height={453} alt="i" ></Image>

                        <div className="play-button" onClick={openVideo} data-video="https://www.youtube.com/embed/EG3n3TRMDXo?si=4HqoHycaR7RSPV3z">
                            <button type="button" className="play-btn"></button>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default InnovationExecution