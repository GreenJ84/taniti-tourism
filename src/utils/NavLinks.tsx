import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cursorTo } from 'readline';

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
  { name: "Transport", link: "/Transportation"},
  { name: "FAQ", link: "/FAQ"},
]

const NavLinks = ({excluded} : {excluded?: string | string[]}) => {
  const currentPath = useLocation().pathname;

  const availableLinks = excluded === undefined ? navLinkData : navLinkData.filter(link => {
    if (typeof excluded === "string") {
      return link.link!== excluded;
    } else {
      return !excluded.includes(link.link);
  }});

  return (
    <>
    {availableLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.link}
          className={link.link === currentPath ?
            "active" : ""
          }
        >
          {link.name}
        </Link>
      </li>
    ))}
    </>
  )
}

export default NavLinks;