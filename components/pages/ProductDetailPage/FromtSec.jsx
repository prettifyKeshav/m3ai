import Image from "next/image"

const FromtSec = () => {
    return (
        <>
            <div className="product-detail-secC">
                <div className="container">
                    <form action="">
                        <div className="heading"  data-animate="zoom-in">
                            <figure>
                                <Image src="/assets/logo-white.svg" height={45} width={131} alt="white logo" ></Image>
                            </figure>
                            <h3>Let’s build your AI-powered future together</h3>
                        </div>
                        <div className="form form-grid"  data-animate="fade-up"> 
                            <div className="form-group">
                                <input type="text" className="form-control" />
                                <label htmlFor="">Name*</label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" />
                                <label htmlFor="">Company Name</label>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" />
                                <label htmlFor="">Phone</label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="form-group full">
                                <textarea name="" id="" className="form-control"></textarea>
                                <label htmlFor="">Message</label>
                            </div>
                            <button className="btn2 full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FromtSec