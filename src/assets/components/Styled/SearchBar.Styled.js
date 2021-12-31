import {RiSearchLine} from 'react-icons/ri';
import styled from "styled-components";
import Colors from '../../Colors';

const SearchBarEl = styled.div`
background-color: ${Colors.CardBackground};
display:flex;
align-items: center;
padding: 1rem;
border-radius: 12px;
margin: 0 1rem 2rem 1rem;

    & > svg{
        font-size: 1.5rem;
        Color: ${Colors.gray};
    }
`;
const Input = styled.input`
font-size:1rem;
flex:1;
border: none;

    :focus{
        outline:none;
    }

`;

export default function SearchBar(){
    return( 
        <SearchBarEl>
           <Input placeholder="search"/>
           <RiSearchLine/>
        </SearchBarEl>
        

);
}