import Image from "next/image"

const TechBehindCreddt = () => {
    return (
        <>
            <div className="product-details-secB">
                <div className="container">
                    <div className="heading"  data-animate="zoom-in">
                        <h2>The Tech behind <span>CREDDT</span></h2>
                    </div>
                    <div className="flex-box">
                        <div className="flex-box-item" data-animate="fade-up">
                            <figure>
                                <Image src="/assets/images/product/product1.png" width={522} height={318} alt="product img" ></Image>
                            </figure>
                        </div>

                        <div className="flex-box-item">
                            <ul>
                                <li data-animate="slide-left"><strong>Continuously retrains models</strong> using validated data to refine extraction quality and adapt to new rent roll formats over time</li>
                                <li data-animate="slide-left"><strong>Integrates human-in-the-loop feedback</strong> to address edge cases and enhance accuracy on property-specific nuances</li>
                                <li data-animate="slide-left"><strong>Implements AI-driven normalization</strong> to standardize dates, rents, charges, and tenant identifiers across heterogenous files</li>
                                <li data-animate="slide-left"><strong>Employs LLMs and vision-language models</strong> to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechBehindCreddt