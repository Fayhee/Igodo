import styled from "styled-components";
import Colors from "./assets/Colors";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavMenu from "./assets/components/NavMenu";
import HomePage from "./assets/components/HomePage";
import StorePage from "./assets/components/StorePage";
import ProductPage from "./assets/components/ProductPage";
import CreateItem from "./assets/components/CreateItem";


const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  poition: absolute;
  left = 0;
  right = 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Pages = styled.div `
flex:1;
display: flex;
overflow: hidden;
`;


function App() {
  return (
    <Router>
    <AppEl>
      <Pages>
      <Routes>
      <Route exact path ="/store" element = {<StorePage/>}/> 
      <Route exact path ="/product" element = {<ProductPage/>}/>
      <Route exact path ="/" element =  {<HomePage/>}/> 
      <Route exact path ="/item" element =  {<CreateItem/>}/> 
      </Routes>
      </Pages>
      <NavMenu/>
    </AppEl>
    </Router>
  );
}

export default App;
