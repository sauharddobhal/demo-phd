import React from 'react'
import CountUp from 'react-countup';
import Stats1 from "../assets/stats1.svg"
import Stats2 from "../assets/stats2.svg"

import Stats3 from "../assets/stats3.svg"
const Stats = () => {
  return (
    <>
    <div className="stats-wrap">
        <div className="new-stats1">
            <div className="new-stats-img">
                <h1><CountUp end={428} duration={0.8} />+</h1>
            </div>
            <p>Number of Ph.D. <br /> Scholars</p>
        </div>
        <div className="new-stats1">
            <div className="new-stats-img">
                <h1><CountUp end={40} duration={0.8} /><br /> Cr+</h1>
            </div>
            <p>Grants for Research <br /> Projects</p>
        </div>
        <div className="new-stats1">
            <div className="new-stats-img">
                <h1><CountUp end={250} duration={0.8} />+</h1>
            </div>
            <p>Published patent <br /> count</p>
        </div>
        <div className="new-stats1">
            <div className="new-stats-img">
                <h1><CountUp end={35} duration={0.8} />+</h1>
            </div>
            <p>Patents granted in the <br /> current year</p>
        </div>
        
       
        
        
        {/* <div className="stat1">
            <div className="stat1-img">
                <img src={Stats1} alt="" />
            </div>
            <div className="stat1-text">
            <h1> 
                <CountUp end={8000} duration={0.8} />+Research
                </h1>
                <p>to be provided to NET/GATE/JRF Qualified Candidates*</p>
            </div>
        </div> */}

    </div>
    </>
  )
}

export default Stats