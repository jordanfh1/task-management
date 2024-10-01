'use client'
import React from 'react'
import './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className="header">
        <div className="header-container">
            <h1 className="logo">TaskManagement.ai</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;