import styled from "styled-components";

const Img = styled.img`
    width: ${(p) => (p.width?p.width:" 100%;")}
    ${(p) => (p.height? `heigth: ${p.height};` : "")}
    ${(p) => (p.boarderRadius? `boarder-radius: ${p.boarderRadius};` : "")}
`;

export default Img; 