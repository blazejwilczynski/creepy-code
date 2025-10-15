import './styles/Landing.css'
import upsdie_face from '../assets/emoji/upside_down_face.png'

export function Landing() {
    return (
        <div className="landing">
            <div className="landing-wrapper">
                <div className="emoji-icons">
                    <div className="emoji row"></div>
                    <div className="emoji row"></div>
                    <div className="emoji row"></div>
                </div>
                <div className="landing-text"></div>
            </div>
        </div>
    )
}