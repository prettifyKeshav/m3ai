import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/styles/contact/contact.css"
import FromtSec from './FromtSec'

const ContactUsPage = () => {
    return (
        <>
            <div className="contact-secA">
                <div className="container">
                    <div className="heading" data-animate="fade-up">
                        <h1>Contact M3Ai</h1>
                    </div>

                    <div className="grid-box">
                        <div className="grid-box-item" data-animate="fade-right">
                            <div className="flex-box">
                                <h4>Address</h4>
                                <figure>
                                    <Image src="/assets/images/contact/address.svg" width={40} height={40} alt='ico'></Image>
                                </figure>
                            </div>
                            {/* <p>Tower 3A, 4th Floor, DLF Corporate Park, M.G. Road, Gurugram, Haryana - 122002, India</p> */}
                            <p>Block 3A, 4th Floor, DLF Corporate Park, M. G. Road, Gurugram – 122002</p>

                            <Link href="https://www.google.com/maps/dir/28.4117815,77.054996/DLF+Corporate+Park,+Moulsari+Ave,+Garden+Estate,+DLF+Phase+3,+Sector+24,+Gurugram,+Haryana+122010/@28.4462394,77.0546252,13.25z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1ed3c642016d:0x56ed94151964d0a6!2m2!1d77.1051404!2d28.482756!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                                Get Direction
                                <figure>
                                    <Image src="/assets/icon/top-right.svg" width={16} height={16} alt="top right ico"></Image>
                                </figure>
                            </Link>
                        </div>

                        <div className="grid-box-item" data-animate="fade-up">
                            <div className="flex-box">
                                <h4>Write Us</h4>
                                <figure>
                                    <Image src="/assets/images/contact/email.svg" width={40} height={40} alt='ico'></Image>
                                </figure>
                            </div>
                            <Link href="mailto:info@M3AI.com">info@M3AI.com</Link>
                        </div>

                        <div className="grid-box-item" data-animate="fade-left">
                            <div className="flex-box">
                                <h4>Call Us</h4>
                                <figure>
                                    <Image src="/assets/images/contact/call.svg" width={40} height={40} alt='ico'></Image>
                                </figure>
                            </div>
                            <Link href="tel:+911244130500">+91-124-4130500</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-secB">
                <div className="container">
                    <FromtSec />
                </div>
            </div>
        </>
    )
}

export default ContactUsPage