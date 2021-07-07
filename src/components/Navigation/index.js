import React from 'react';

function Navigation() {
    return (
        <header>
            <h1>Zhypara Abdieva</h1>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <a href="#about" >
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#projects" >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;