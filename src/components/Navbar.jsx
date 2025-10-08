import './styles/Navbar.css'
import logo_light from '../assets/creepy-code-logo-light.svg'
import logo_dark from '../assets/creepy-code-logo-dark.svg'
import toggle_light from '../assets/night.png'
import toggle_dark from '../assets/day.png'


export function Navbar({theme, setTheme}) {

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <nav>   
            <img src={theme === 'light' ? logo_light : logo_dark} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Projects</li>   
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Links</li>
            </ul>
           
            <img onClick={() =>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
        </nav>
    )
}   
