import React from 'react';
import Titletxt from '../../assets/Titletxt.png';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={Titletxt} alt="Typing Test" />
      </div>
    </header>
  );
}