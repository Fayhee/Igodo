import styled from "styled-components";
import Colors from '../Colors';
import Img from './styled/Img.Styled';
import bidImage from "./bidImage2.png";

const MyBidsListEl = styled.div`
padding: 0 1rem;
margin-top: 1rem;
`;

const Title = styled.h3`
font-weight: 500;
margin-bottom: 1rem;
`;

const ItemList = styled.div`
diplay: flex;
flex-directio: column;
row-gap: 1rem
`;

const BidItemE1 = styled.span`
display: flex;
padding: 0.5rem;
cursor: pointer;
width: 100%;
align-items: center;
transition-property: background-color, border-radius;
transition-duration: 0.5s;

&: hover{
    background-color: ${Colors.GrayBorder};
    border-radius: 12px
}
`;

const BidData = styled.span`
margin-left = 1rem;
display: flex;
flex: 1;
flex-direction: column;
row-gap: 0.5;
justify-content: center
`;

const BTitle = styled.span`
font-weight: 500;
`;

const BidDes = styled.span`
color: ${Colors.Gray};
`;

const BidAmount = styled.span`
font-weight: 500;
`;



function BidItem(){
    return (
    <BidItemE1>
        <Img width = "4rem" height = "4rem" boarderRadius = "12px" src = {bidImage}/>
        <BidData>
            <BTitle>Clay boyz 174</BTitle>
            <BidDes>Waldo</BidDes>
        </BidData> 
        <BidAmount>1.4 tMetis</BidAmount>
    </BidItemE1>
    );
}

export default function MyBidsList(){
    return <MyBidsListEl>
        <Title>Your Bids </Title> 
    <ItemList>
        <BidItem/>
        <BidItem/>
    </ItemList>
</MyBidsListEl>;
}

