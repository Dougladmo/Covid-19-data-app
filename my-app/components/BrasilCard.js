import React from 'react';
import { StyledBrasilCard } from './Card.style';
import { StyledText, StyledTitle } from './Text.style';

const BrasilCard = ({state, infecteds, presunts}) => {
  return (
    <StyledBrasilCard>
        <StyledTitle> {state}  </StyledTitle>
        <StyledText>Numero de infectados: {infecteds} </StyledText>
        <StyledText>Contagem de presuntos: {presunts} </StyledText>
    </StyledBrasilCard>
  );
}

export default BrasilCard;