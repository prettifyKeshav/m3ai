import Image from "next/image"

const AboutM3ai = () => {
    return (
        <div className="about-secA">
            <div className="container">
                <div className="flex-box">
                    <div className="flex-box-item" data-animate="fade-up">
                        <figure>
                            <Image src="/assets/images/m3ai-icon.svg" height={138} width={397} alt="m3ai icon"></Image>
                        </figure>
                    </div>

                    <div className="flex-box-item" data-animate="fade-up">
                        <div className="content">
                            <p>M3 AI is an enterprise AI company
                                delivering high‐tech solutions to tackle
                                complex industry challenges.</p>
                            <p>We partner with leading organizations
                                across industries to drive
                                transformation through intelligent
                                automation and scalable AI platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutM3ai