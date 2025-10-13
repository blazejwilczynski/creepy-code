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
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#" className="nav-link">Projects</a></li>   
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
                <li><a href="#" className="nav-link">Blog</a></li>
                <li><a href="#" className="nav-link">Links</a></li>
            </ul>
            <div className='nav-icons'>
            <a href="https://www.github.com/blazejwilczynski" target="_blank" rel="noopener noreferrer"> 
                <img src={theme === 'light' ? github_light : github_dark} alt="" className='github-logo' />
            </a>    
            <img onClick={() =>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
            </div>
        </nav>
    )
}   
