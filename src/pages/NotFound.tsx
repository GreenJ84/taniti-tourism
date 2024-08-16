import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>We're sorry, but the page you were looking for doesn't exist.</p>
        <Link to="/" className="link">Return to Home</Link>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  text-align: center;
  h1 {
      font-size: 6rem;
      font-weight: bold;
      color: rgb(var(--accent));
  }

  h2 {
      font-size: 2rem;
      margin-bottom: 20px;
  }

  p {
      font-size: 1.2rem;
      margin-bottom: 30px;
  }
`;