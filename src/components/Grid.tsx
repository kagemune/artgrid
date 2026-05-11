import Card from './Card';
import styled from 'styled-components';



function Grid({ cards }: { cards: { key: string; date: string; description: string; imageUrl: string }[] }) {
    
    const GridContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 2fr auto;
        gap: 16px;
        width: 95%;
        box-sizing: border-box;
        border-radius: 8px;
    `;

 
    return (
    <GridContainer>

      {cards.map(({ key, ...card }) => (
        <Card key={key} {...card} />
      ))}
    </GridContainer>
  );
}

export default Grid;