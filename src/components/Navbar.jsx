import './styles/Navbar.css'
import logo_light from '../assets/creepy-code-logo-light.svg'
import logo_dark from '../assets/creepy-code-logo-dark.svg'
import toggle_light from '../assets/night.svg'
import toggle_dark from '../assets/day.svg'
import github_light from '../assets/github-logo-light.svg'
import github_dark from '../assets/github-logo-dark.svg'


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
            <img src={theme === 'light' ? github_light : github_dark} alt="" className='github-logo' />
            <img onClick={() =>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
        </nav>
    )
}   
