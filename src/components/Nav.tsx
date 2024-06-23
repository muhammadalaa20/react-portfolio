import '/background.svg'
import { useState } from 'react'
export default function Nav() {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const appElement = document.getElementsByClassName('app')[0] as HTMLElement;
        const title= document.getElementsByClassName('logo--title')[0] as HTMLElement
        const darkModeButton= document.getElementsByClassName('dark-mode')[0] as HTMLElement 
        if (darkMode) {
            appElement.style.backgroundImage = 'url(/../background.svg)';
            document.body.style.backgroundColor = 'white';
            title.style.color = 'black';
            darkModeButton.classList.remove('fa-sun');
            darkModeButton.classList.add('fa-moon');
        } else {
            appElement.style.backgroundImage = 'url(/../background3.svg)';
            document.body.style.backgroundColor = 'black';
            title.style.color = 'white';
            darkModeButton.classList.remove('fa-moon');
            darkModeButton.classList.add('fa-sun');
        }
    }   

    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleMenuButton = () => {
        setToggleMenu(!toggleMenu);
        const menuButton = document.getElementsByClassName('menu--button')[0] as HTMLElement;
        const menu = document.getElementsByClassName('menu')[0] as HTMLElement;
        menuButton.classList.toggle('fa-times');
        menuButton.classList.toggle('fa-bars');
        if (toggleMenu) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            menu.classList.remove('flex-col');
        } else {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            menu.classList.add('flex-col');
        }
    }


    return (
        <div className="nav flex flex-row justify-between items-start">
            <div className="nav-left p-2 flex justify-center items-center">
            <img src="./engineer.svg" alt="logo" className="logo h-10" />
            <h1 className="text-2xl font-bold logo--title">Muhammad</h1>
            </div>
            <div className="nav-right flex flex-row items-start justify-between">
                <div className="nav-buttons flex flex-row">
                <button><i className="fa-regular fa-file p-3 text-2xl"></i></button>
                <button onClick={toggleDarkMode}><i className="fa-regular fa-moon p-3 text-2xl dark-mode"></i></button>
                </div>
                <div className="nav-links">
                    <button onClick={toggleMenuButton}><i className="fa-solid fa-bars p-3 text-2xl menu--button"></i></button>
                    <div className="menu hidden">
                        <a href="#about" className="nav-link p-4 font-bold">About</a>
                        <a href="#projects" className="nav-link p-4 font-bold">Projects</a>
                        <a href="#contact" className="nav-link p-4 font-bold">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}