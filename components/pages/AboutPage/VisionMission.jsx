import React from 'react'
import Image from 'next/image'

const VisionMission = () => {
  return (
    <>
      <div className="about-secB">
        <div className="container">
          <div className="heading" data-animate="zoom-in">
            <h2>Simplifying work to <span>amplify</span> outcomes</h2>
          </div>

          <div className="flex-box">
            <div className="flex-box-item" data-animate="fade-up">
              <figure>
                <Image src="/assets/images/About/vision.svg" width={58} height={58} alt='ico'></Image>
              </figure>
              <div className="content">
                <h4>Mission</h4>
                <p>Commitment to understanding the problem, gaining domain expertise, only
                  then exploring a solution.</p>
              </div>
            </div>

            <div className="flex-box-item" data-animate="fade-up">
              <figure>
                <Image src="/assets/images/About/mission.svg" width={58} height={58} alt='ico'></Image>
              </figure>
              <div className="content">
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

export default VisionMission  