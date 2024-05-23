import React, { useState } from 'react';
import Styles from "./Header.module.css"

function Header(props){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header>
      <h1>{props.title}</h1>
      <div className={Styles.dropdown}>
        <button className={Styles.dropbtn} onClick={toggleMenu}>
        &#9776;
        </button>
        {isOpen && (
          <div className={Styles.dropdownContent}>
            <a href="home">Home</a>
            <a href="projects">Projects</a>
            <a href="art">art</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
