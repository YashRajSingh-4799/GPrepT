import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png'
// import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav class="navbar">
      
      <div class="navbar-title">
        <Image
          className="gpt-logo"
          src={logo}
          alt="Logo"
          width={250}
          height={250}
        />
        {/* <Image src="/images/my-image.jpg" alt="My Image" width={500} height={300} /> */}
      
        
        </div>
      <div class="navbar-links">
        <a className="telegram-button" href="https://t.me/your_telegram_link">
          Chat with Telegram Bot
        </a>
      </div>
    </nav>
  );
}

export default Navbar
