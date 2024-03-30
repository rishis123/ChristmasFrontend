import { slide as Menu } from 'react-burger-menu';
// push animation
import React, {useState} from 'react';
import burger from "/Users/rishishah/ChristmasProject/src/components/Hamburger_icon.svg.png";
import "/Users/rishishah/ChristmasProject/src/react_styles.css"


const BurgerMenu = ({ onBurgerClick }) => (
    <img src={burger} width={25} height={25} alt="Burger Menu" onClick={onBurgerClick} right />
  );
  

  const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleBurgerClick = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <Menu customBurgerIcon={<BurgerMenu onBurgerClick={handleBurgerClick} />} isOpen={menuOpen} outerContainerId="page-wrap" right>
        <a id="submit" className="menu-item" href="/submit" onClick={() => setMenuOpen(false)}>Submit Entry</a>
        <a id="find" className="menu-item" href="/finder/:id" onClick={() => setMenuOpen(false)}>Find a TwinklePath!</a>
      </Menu>
      
    );
  };
  
    export default Sidebar;