import React from 'react';
import { Link } from 'react-router-dom';

interface INavLink {
  name: string;
  link: string;
}

const navLinkData: INavLink[] = [
  { name: "Home", link: "/"},
  { name: "About", link: "/About"},
  { name: "Activities", link: "/Activities"},
  { name: "Cuisine", link: "/Cuisine"},
  { name: "Lodging", link: "/Lodging"},
  { name: "Transportation", link: "/Transportation"},
  { name: "FAQ", link: "/FAQ"},
]

const navLinks = () => {
  return (
    <>
    {navLinkData.map((link, index) => (
      <li key={index}>
        <Link to={link.link}>
          {link.name}
        </Link>
      </li>
    ))}
    </>
  )
}

export default navLinks;