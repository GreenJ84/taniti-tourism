import React from 'react'
import NavLinks from '../utils/NavLinks'
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Banner>
        <img src='https://i.etsystatic.com/11810216/r/il/23a96e/3571518510/il_1588xN.3571518510_kd51.jpg' alt="Island overview"/>
        <h1>Come visit Taniti</h1>
      </Banner>
      <p className='para'>
        Dive into the captivating world of Taniti, where every moment of your vacation promises to be an extraordinary adventure. Imagine lounging on sun-kissed beaches with crystal-clear waters, exploring hidden waterfalls nestled in lush rainforests, and savoring gourmet meals made from fresh, local ingredients. Whether you&apos;re seeking thrilling outdoor escapades or tranquil, sun-drenched relaxation, Taniti offers a diverse array of experiences that cater to every desire.
      </p>
      <hr style={{"width": "75%", "margin": "10dvh"}}/>
      <ModalLinks>
        <h2>
          Uncover the resources of our island before planning your trip here!
        </h2>
        <ul>
          <NavLinks excluded={"/"} />
        </ul>
      </ModalLinks>
      <hr style={{"width": "75%", "margin": "10dvh"}}/>
      <p className='para'>
        Welcome to Taniti, a pdise where your presence is the heartbeat of our vibrant community. As a visitor to our enchanting island, you become a vital part of our local tapestry, enriching our culture with your curiosity and enthusiasm. Each moment you spend exploring our pristine beaches, lush rainforests, and charming villages helps preserve and celebrate the unique heritage and traditions that make Taniti truly special.
      </p>

      <p className='para'>
        Your support not only boosts our local economy but also fosters a deeper connection between you and the residents of Taniti. From savoring our culinary delights to participating in traditional festivals, your engagement is crucial in sustaining the authentic experiences that define our island. Thank you for joining us in this journey and for contributing to the ongoing story of Taniti, where every visitor helps to shape and enhance the vibrant life of our community.
      </p>
    </>
  )
}

export default Home;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 30dvh;
  > h1{
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 3em;
    text-align: center;
    color: rgb(var(--primary-bg));
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalLinks = styled.nav`
  min-height: 40dvh;
  > h2 {
    text-align: center;
  }
  > ul {
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    row-gap: 80px;
    > li {
      flex: 0 0 40%;
      height: 10em;
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 2em;
        background-color: rgba(var(--secondary-bg));
        border-radius: 50px;
      }
      > a:hover {
        font-size: 2.6em;
        box-shadow: inset 1px 1px 2px 0px rgb(var(--highlight)), inset -1px -1px 2px 0px rgb(var(--highlight)), 1px 1px 20px 2px rgb(var(--primary-bg)), inset -1px -1px 20px 2px rgb(var(--primary-bg))
      }
    }
  }
`;