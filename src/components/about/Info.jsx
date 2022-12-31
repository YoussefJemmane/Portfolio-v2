import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
          Completed
        </h3> 
        <span className="about__subtitle">3 + Projects</span>
      </div>
      <div className="about__box">
      <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
          Support
        </h3> 
        <span className="about__subtitle">Friday - Saturday : 13:00 → 21:00</span>
      </div>
    </div>
  )
}

export default Info