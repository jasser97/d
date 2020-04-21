import React from "react";
import "./SideDrawer.css";
const SideDrawer = props => {
  let DrawerClasses = "SideDrawer";
  if (props.show) {
    DrawerClasses = "SideDrawer open";
  }
  return (
    <nav className={DrawerClasses}>
      <ul>
        <li>
          <a href="..">Accueil </a>
        </li>
        <li>
          <a href="..">À PROPOS </a>
        </li>
        <li>
          <a href="..">ÉVÈNEMENTS PROCHE </a>
        </li>
        <li>
          <a href="..">ORGANISATEUR </a>
        </li>
        <li>
          <a href="..">GALLERIE </a>
        </li>
        <li>
          <a href="..">ÉVÈNEMENT </a>
        </li>
        <li>
          <a href="..">CONTACT </a>
        </li>
        <li>
          <a href="..">BLOG </a>
        </li>
        <li>
          <a href="..">CONNEXION </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
