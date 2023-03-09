import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
import Card from '../UI/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { colors } from '../../style'
import me from "../../assets/images/me-left.png"
import "./style.css"
import SocialConnect from '../UI/SocialConnect'
const percentage = 70;

const Expertise = (props) => {
    return (
        <div className='container' style={{ marginTop: "50px", padding: "50px 0" }}>
            <div className='rightImgMeContainer'>
                <img src={me} alt="" />
                <SocialConnect style={{position: "absolute", bottom :"0"}}/>
            </div>
            <div >
                <SmallHeading text="Expertise" />
                <MediumHeading text="Special Skils" />
            </div>
            
            <Card  style={{
                padding: "30px",
                width: "320px",
                  margin: "100px auto",
                  position: "relative",
                  zIndex: 1,
            }}>
                <div className="flexRow align-center">
                <div style={{ width: "80px", height: "80px" }}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            textColor: colors.primaryColor,
                            pathColor: colors.primaryColor,
                        })}
                    />
                </div>
                <h2 className="textColor mlr-10">Development</h2>
                </div>
                <p className='gray mtb-10 font-12'>JavaScript is one of the greatest programming language.</p>
            </Card>

            <SocialConnect/>
        </div>
    )
}

export default Expertise
