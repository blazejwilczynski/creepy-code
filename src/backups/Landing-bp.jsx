import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './styles/Landing.css'
import upside_face from '../assets/emoji/upside_down_face.png'
import smiley_face_sunglasses from '../assets/emoji/smiling_face_with_sunglasses.png'
import alien_monster from '../assets/emoji/alien_monster.png'
import pizza from '../assets/emoji/pizza.png'
import hot_beverage from '../assets/emoji/hot_beverage.png'
import chocolate_bar from '../assets/emoji/chocolate_bar.png'
import guitar from '../assets/emoji/guitar.png'
import soccer_ball from '../assets/emoji/soccer_ball.png'
import rocket from '../assets/emoji/rocket.png'
import exploding_head from '../assets/emoji/exploding_head.png'
import dizzy_face from '../assets/emoji/dizzy_face.png'
import pumppkin from '../assets/emoji/pumpkin.png'
import pill from '../assets/emoji/pill.png'
import cup_with_straw from '../assets/emoji/cup_with_straw.png'
import watermelon from '../assets/emoji/watermelon.png'
import drum from '../assets/emoji/drum.png'
import eightball from '../assets/emoji/eightball.png'




export function Landing() {
    return (
        <div className="landing">
            <div className="landing-wrapper">
                <div className="emoji-icons">
                    <div className="emoji-row">
                        <img src={upside_face} alt="emoji" />
                        <img src={smiley_face_sunglasses} alt="" />
                        <img src={alien_monster} alt="" />
                    </div>
                    <div className="emoji-row">
                        <img src={pizza} alt="emoji" />
                        <img src={hot_beverage} alt="" />
                        <img src={chocolate_bar} alt="" />
                    </div>
                    <div className="emoji-row">
                        <img src={guitar} alt="emoji" />
                        <img src={soccer_ball} alt="" />
                        <img src={rocket} alt="" />
                    </div>
                </div>
                <div className="landing-text">
                    <h2>We Bring</h2>
                    <h2>Your</h2><span>_____________</span>
                    <h2>To Virtual Life</h2>
                </div>
            </div>
        </div>
    )
}