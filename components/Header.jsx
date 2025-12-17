"use client";

import Link from "next/link"
import Image from "next/image"
import '@/styles/header.css'
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";

const Header = () => {
    // const openHam = useModalStore((state) => state.openHam);
    // const openEnquire = useModalStore((state) => state.openEnquire)
    // const openLogin = useModalStore((state) => state.openLogin)

    const [headerFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
            <header className={`${headerFixed ? "header-fixed" : ""}`}>
                <div className="container-fluid">
                    <div className="header-wrapper">
                        <div className="colA">
                            <Link href="/" className="logo">
                                <Image src="/assets/logo.svg" width="204" height="25" alt="Vedikant logo"></Image>
                            </Link>
                        </div>

                        <nav className="colB header__nav">
                            <ul className="nav-list">
                                <li>
                                    <Link href="about-us">About M3Ai</Link>
                                </li>
                                <li>
                                    <Link href="services">M3Ai Services</Link>
                                </li>
                                <li>
                                    <Link href="products">M3Ai Products</Link>
                                </li>
                                <li>
                                    <Link href="industries">Industries</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="colC">
                            <Link href="contact-us" className="btn" data="Contact Us"></Link>
                        </div>

                        <button type="button" className="ham-btn" data-model=".ham-pop">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header