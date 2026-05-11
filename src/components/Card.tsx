    import styled from "styled-components";
    const CardContainer = styled.div`
      max-width: 250px;
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;
      background-color: #2a2738;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      }
    `;
    const CardImage = styled.img`
      width: 100%;
      height: auto;
      border-radius: 4px;
    `;
    const CardDescription = styled.p`
      font-size: 14px;
      margin: 8px 0;
    `;
   
    function Card({ date, description, imageUrl }: { date: string; description: string; imageUrl: string }) {
      
        return (
        <CardContainer>
          <CardImage src={imageUrl} alt={date} title={date} />
          <CardDescription>{description}</CardDescription>
        </CardContainer>
      );
    }
    
    export default Card;