import React, { useContext } from 'react'

import NavLinks from '../utils/NavLinks'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../utils/AppContext'

const Navigation = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <Header>
      <nav>
        <Link to="/" id="brand">
          <img src="taniti-logo.avif" alt="Taniti Brand" />
        </Link>
        {isHomePage ?
          <></> :
          <ul>
            <NavLinks />
          </ul>
        }
      </nav>
    </Header>
  )
}

export default Navigation;

const Header = styled.header`
  width: 100vw;
  height: 12dvh;
  background-color: rgb(var(--secondary-bg));
  > #brand, #brand > img {
    max-width: 20vw;
  }
  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
`;