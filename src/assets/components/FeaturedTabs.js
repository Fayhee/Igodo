import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";

import Colors from '../Colors';
import Img from './styled/Img.Styled';

const items = [
    {id:1, Title: 'Universe 34', SubTitle: 'Oga udo', Image:image1},
    {id:1, Title: 'Universe 34', SubTitle: 'Oga udo', Image:image2},
    {id:1, Title: 'Universe 34', SubTitle: 'Oga udo', Image:image3},
    {id:1, Title: 'Universe 34', SubTitle: 'Oga udo', Image:image4}

]
const FeaturedTabEl = styled.nav`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;
position: relative;
overflow: hidden;
height: 400px;
`;

const Item = styled.nav`
background-color: ${Colors.CardBackground};
padding: 0 4rem;
border-radius: 12px;
display: flex;
cursor: pointer;
flex-direction: column;
`;

const Title = styled.span`
font-size: 1.1rem;
margin-top: 0.2rem;
margin-left: 1rem;

`;

const SubTitle = styled.span`
font-size: 1rem;
color: ${Colors.Gray};
margin-left: 1rem;
margin-bottom: 0.5rem;
`;


const ShowMore = styled.span`
text-align: center;
position: absolute;
cursor: pointer;
left: 0;
bottom: 0;
width: 100%;
font-weight:500;
background: rgba(255, 255, 255, 0.32);
padding: 1rem;
border:1px solid ${Colors.GrayBorder};
backdrop-filter: blur(17px);
border-radius: 12px
`;

const BottomFade = styled.span`
text-align: center;
position: center;
left: 0;
bottom: 0;
width: 100%;
height: 25%;
background-image: linear-gradient(
    rgba(255, 255, 255, 0.32),
 ${Colors.Background}
 );
`;

const Logo = styled.img`
    width: 100%;
    height: 70%;
    margin: 15px;
    border-radius: 8px;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
`;


export default function FeaturedTabs(){
    const nav = useNavigate();
    return ( <FeaturedTabEl>
        
        {items.map(item =>{
            return (
            <Item onClick = {() =>{
                nav("/product");
            }}
            >
                <Logo src = {item.Image}/>
                <Title>{item.Title}</Title>
                <SubTitle>{item.SubTitle}</SubTitle>
            </Item>
            );
        })}
        <BottomFade/>
        <ShowMore>
            <BiChevronDown/> Show More
        </ShowMore>
    </FeaturedTabEl>
    ); 
} 