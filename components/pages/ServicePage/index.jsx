import React from 'react'
import Hero from './Hero'

import "@/styles/service/service.css"
import ServiceContainer from './ServiceContainer'

import 'react-loading-skeleton/dist/skeleton.css'

const ServicePage = () => {
    return (
        <>
            <Hero />
            <ServiceContainer />
        </>
    )
}

export default ServicePage      