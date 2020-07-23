import React from 'react';
import styled from 'styled-components';
import pokeball from '../images/pokeball.png';
const Header = () => {
  const HeaderWrapper = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #7850B8;
    display:flex;
    align-items:center;
  `;
  const PokemonTitle = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
  const LogoWrapper = styled.div`
    margin-left: 2rem;
    height: 4rem;
  `;
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <PokemonTitle src={pokeball} />
        <PokemonTitle src='https://fontmeme.com/permalink/200717/572686869a17dcc52acfc9572f28afe7.png' />
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
