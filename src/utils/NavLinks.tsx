import React from 'react'

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
        <a href={`taniti-tourism/${link.link}`}>
          {link.name}
        </a>
      </li>
    ))}
    </>
  )
}

export default navLinks;