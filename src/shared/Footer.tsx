import React from 'react'

import NavLinks from '../utils/NavLinks'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Foot>
      <nav>
        <ul>
          <NavLinks />
        </ul>
      </nav>
    </Foot>
  )
}

export default Footer;

const Foot = styled.footer`

  width: 100vw;
  height: 6dvh;
  background-color: rgb(var(--secondary-bg));
  > nav > ul {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;