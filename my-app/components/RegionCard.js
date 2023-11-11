import { useState, useEffect } from 'react';
import { StyledCard } from './Card.style';
import { StyledText, StyledTitle } from './Text.style';

const RegionCard = ({state, infecteds, presunts}) => {

  return (
    <StyledCard>
        <StyledTitle> {state}  </StyledTitle>
        <StyledText>Numero de infectados: {infecteds.toLocaleString('pt-BR')} </StyledText>
        <StyledText>Contagem de presuntos: {presunts.toLocaleString('pt-BR')} </StyledText>
    </StyledCard>
  );
}

export default RegionCard;