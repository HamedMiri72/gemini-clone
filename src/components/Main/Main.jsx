import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>

        <div className="nav">
            <p>HamedTecAi</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">


            <div className="greet">
                <p><span>Hello, Bro</span></p>
                <p>How can i help you today?</p>
            </div>

            <div className="cards">

                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summrize this concept:urban planing</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>

            </div>


        </div>
        
    </div>
  )
}

export default Main