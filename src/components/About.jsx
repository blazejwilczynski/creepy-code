import "./styles/About.css";
import creepy_desk from "../assets/creepy-desk-440-x-590.svg";
import astro_light from "../assets/tech-icons/astro.svg";
import figma_light from "../assets/tech-icons/figma.svg";
import react_light from "../assets/tech-icons/react.svg";
import wordpress_light from "../assets/tech-icons/wordpress.svg";
import mobile_elements from "../assets/mobile-elements.svg";
import react_dark from "../assets/tech-icons/react-dark.svg";
import astro_dark from "../assets/tech-icons/astro-dark.svg";
import wordpress_dark from "../assets/tech-icons/wordpress-dark.svg";
import figma_dark from "../assets/tech-icons/figma-dark.svg";
import creepy_desk_dark from "../assets/creepy-desk-440-x-590-dark.svg";
import mobile_elements_dark from "../assets/mobile-elements-dark.svg";


export function About({theme}) {
    return (
        <section className="about-section">
        <div className="about-desk-wrapper">
            <div className="about-desk-image"> 
                <img src={theme === 'light' ? creepy_desk : creepy_desk_dark} alt="Creepy Code Desk Illustration" />
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
            Currently I am focusing on two frontend frameworks:</p>
            <p><a href="https://react.dev/" target="_blank">React</a>
             <img src={theme === 'light' ? react_light : react_dark} alt="" className="inline-icon" aria-hidden="true" />
            and 
             <span className="nowrap"><a href="https://astro.build/" target="_blank"> Astro</a>
             <img src={theme === 'light' ? astro_light : astro_dark} alt="" className="inline-icon" aria-hidden="true" /></span></p>


<p>
  I also use (loved-hated) <a href="https://wordpress.org/" target="_blank">WordPress</a>
  <img src={theme === 'light' ? wordpress_light : wordpress_dark} alt="" className="inline-icon" aria-hidden="true" />
</p>

<p>
  I make designs in <a href="https://www.figma.com/" target="_blank"> Figma</a>
  <img src={theme === 'light' ? figma_light : figma_dark} alt="" className="inline-icon" aria-hidden="true" />
</p>
<p>
    I am <a href="https://www.scrum.org/" target="_blank">Scrum</a> and <a href="https://www.scrum.org/resources/kanban-guide-scrum-teams" target="_blank">Kanban</a> enthusiast
</p>
            </div>
            <div className="about-mobile-image"> 
                <img src={theme === 'light' ? mobile_elements : mobile_elements_dark} alt="Creepy Code Desk Illustration" />
            </div>

        </div>

        </section>
    )
}