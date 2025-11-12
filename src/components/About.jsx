import "./styles/About.css";
import creepy_desk from "../assets/creepy-desk-440-x-590.svg";
import astro from "../assets/tech-icons/astro.svg";
import figma from "../assets/tech-icons/figma.svg";
import react from "../assets/tech-icons/react.svg";
import wordpress from "../assets/tech-icons/wordpress.svg";
import mobile_elements from "../assets/mobile-elements.svg";

export function About() {
    return (
        <section className="about-section">
        <div className="about-desk-wrapper">
            <div className="about-desk-image"> 
                <img src={creepy_desk} alt="Creepy Code Desk Illustration" />
            </div>
            <div className="about-desk-text">
                <p>
                Origin of <a href="#">Creepy Code</a> is really simple.  
                I&nbsp;needed website for my first book <a href="https://blazejwilczynski.github.io/rockstar-book/" target="_blank">Rockstar.</a> Suddenly I&nbsp;really got into development – both code and design, so&nbsp;I&nbsp;started exploring those fields. 
                </p>
            </div>
        </div>
        <div className="about-mobile-wrapper">
             <div className="about-mobile-text">
                <p>
            Currently I am focusing on two front-end frameworks:
            <strong> React </strong>
             <img src={react} alt="" className="inline-icon" aria-hidden="true" />
            and
             <strong> Astro </strong>
             <img src={astro} alt="" className="inline-icon" aria-hidden="true" />.
</p>

<p>
  I also use (loved-hated) <strong>WordPress</strong>
  <img src={wordpress} alt="" className="inline-icon" aria-hidden="true" />.
</p>

<p>
  I make designs in <strong>Figma</strong>
  <img src={figma} alt="" className="inline-icon" aria-hidden="true" />.
</p>
            </div>
            <div className="about-desk-image"> 
                <img src={creepy_desk} alt="Creepy Code Desk Illustration" />
            </div>

        </div>

        </section>
    )
}