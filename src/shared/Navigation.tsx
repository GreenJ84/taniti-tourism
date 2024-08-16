import React from 'react'

import NavLinks from '../utils/NavLinks'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  return (
    <Header>
      <nav>
        <Link to="/" id="brand">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=306,fit=crop/AE05DJn12aclyvvO/logo-small-YZ9WJReWvKi9J4QL.png" alt="Taniti Brand" />
        </Link>
        {!isHomePage &&
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