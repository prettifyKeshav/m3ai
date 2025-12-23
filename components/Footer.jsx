"use client"

import Link from "next/link"
import Image from "next/image"
import Banner from "@/components/Banner";
import FooterStrip from "./FooterStrip";
import Hamburger from "./Hamburger";
import EnquirePop from "./EnquirePop";
import { useModalStore } from "@/store/modalStore"
import Overlay from "./Overlay";
import VideoPopup from "./VideoPop";
import IndustriesDetailPop from "./IndustrieDetailsPop";

export default function Footer() {
    const openEnquire = useModalStore((state) => state.openEnquire)
    return (
        <>
            <footer>
                <div className="main-footer container">
                    <div className="colA">

                        <div className="bottom-btn">
                            <button onClick={openEnquire}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.106 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2 2 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024z"></path></svg>
                                </figure>
                                Get in Touch M3Ai
                            </button>

                            <Link href="/">
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                                </figure>
                                Whatsapp
                            </Link>
                        </div>

                        <div className="social-icons">
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#000" d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"><animate fill="freeze" attributeName="d" dur="0.8s" keyTimes="0;0.3;0.5;1" values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"></animate></path></svg>
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                            </Link>
                            <Link href="/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#ffffff" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z" /></g></svg>
                            </Link>
                        </div>

                        <div className="contact">
                            <h6>Connect us</h6>
                            <Link href="tel:+910000000000">+91 - 000 000 0000</Link>
                        </div>
                    </div>
                    <div className="colB">
                        <div className="flex-box">
                            <div className="flex-box-item">
                                <h6>Services</h6>
                                <ul>
                                    <li><Link href="/">AI workflows orchestration</Link></li>
                                    <li><Link href="/">Finetuning pretrained models</Link></li>
                                    <li><Link href="/">AI native product development</Link></li>
                                    <li><Link href="/">Data analytics</Link></li>
                                    <li><Link href="/">Data intelligence</Link></li>
                                    <li><Link href="/">Agentic architecture</Link></li>
                                    <li><Link href="/">Custom SLMs</Link></li>
                                </ul>
                            </div>

                            <div className="flex-box-item">
                                <h6>Discover</h6>
                                <ul>
                                    <li><Link href="/">Products</Link></li>
                                    <li><Link href="/">Industries</Link></li>
                                    <li><Link href="/">About M3Ai</Link></li>
                                    <li><Link href="/">Insights</Link></li>
                                    <li><Link href="/">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="colC">
                        <div className="form form-grid">
                            <h6>What's New at M3Ai newsletter subscription</h6>
                            <form action="">

                                <div className="form-group">
                                    <input type="email" className="form-control" />
                                    <label htmlFor="">Enter email id</label>

                                    <button>
                                        Subscribe
                                        <figure>
                                            <Image src="/assets/icon/top-right.svg" width={16} height={16} alt="top right ico"></Image>
                                        </figure>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <figure>
                            <Image className="footer-logo" src="/assets/images/m3ai-icon.svg" width={397} height={138} alt="footer logo" ></Image>
                        </figure>
                    </div>
                </div>

                <div className="bottom-footer container">
                    <p>&copy; M3Ai. All rights reserved.&nbsp; <b className="none">|</b> &nbsp;
                        <Link href="https://www.prettifycreative.com/" target="_blank">
                            <span className="madeby"> Made by :
                                <span>
                                    <Image src="/assets/icon/prettify-light.svg" width={100} height={100} alt="prettify creative"></Image>
                                </span>
                            </span>
                        </Link>
                    </p>
                    <div className="pret">
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
            <Overlay />
            <IndustriesDetailPop />
            <EnquirePop />
            <FooterStrip />
            <Hamburger />
            <VideoPopup />
        </>
    )
}