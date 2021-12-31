import styled from "styled-components";
import colors from "../Colors";
import FeaturedTabs from "./FeaturedTabs";
import SearchBar from "./Styled/SearchBar.Styled";
import Tabs from "./Styled/Tabs.Styled";

const tabs = [
    {id:1, title: 'Featured', content: <FeaturedTabs/>},
    {id:2, title: 'Collections', content:<div>Tab2</div>},
    {id:3, title: 'Artist', content:<div>Tab3</div>},
    {id:4, title: 'Tag', content:<div>Tab4</div>}
]

const HomePageEl = styled.div`
background-color: ${colors.Background};
flex:1;
padding-bottom: 10vh;
overflow: auto;
overflow-x: hidden;
min-height: min-content;
padding-top:1rem;
scroolbar-width:0;
:: -webkit-scrollbar{
    displat: none;
}

`;
//``

const Title = styled.h1`
font-family: "DM Mono";
font-weight: normal;
font-size: 1.5rem;
text-align:center;
margin-bottom: 2rem;
`;

export default function HomePage(){
    return(
        <HomePageEl>
            <Title>Naija Art</Title>
            <SearchBar/>
            <Tabs tabs = {tabs}/>
        </HomePageEl>
    );
}
    
  