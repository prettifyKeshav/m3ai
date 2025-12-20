'use client';
import Link from "next/link";
import Image from "next/image";

export default function Banner({
    mediaSrc,
    videoSrc,
    imageSrc,

    h1tag,
    h3tag,
    h3tag2,
    description,

    imageAlt = "Banner Image",
    className = "",
}) {
    return (
        <div className={`banner ${className}`}>
            <div className="bg">
                <figure>
                    {mediaSrc === "video" && videoSrc ? (
                        <video className="bg-media" playsInline autoPlay muted loop> <source src={videoSrc} type="video/mp4" /> </video>
                    ) : imageSrc ? (
                        <Image src={imageSrc} width={1280} height={720} alt={imageAlt || "Banner Background"} />
                    ) : null}
                </figure>

                <div className="banner-wrapper">
                    <div className="container-fluid">
                        <div className="heading" >
                            {h3tag && <h3 data-animate="fade-up">{h3tag}</h3>}
                            {h1tag && <h1 data-animate="fade-up">{h1tag}</h1>}
                            {h3tag2 && <h3 data-animate="fade-up">{h3tag2}</h3>}
                            {description && <p data-animate="fade-up">{description}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
