import styled from "styled-components";
import Colors from "../Colors";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./styled/Button.Styled";
import { useNavigate } from "react-router-dom";
import PageContainer from "./styled/PageContainer.Styled";
import ProductCard from "./styled/ProductCard.Styled";

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1.5rem;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const HoldBid = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  background-color: ${Colors.Primary};
  color: ${Colors.CardBackground};
  border-radius: 12px;
  padding: 1rem;
  margin: 0 0.5rem;
  column-gap: 0.5rem;
  margin-top: 1rem;

  & > svg {
    font-size: 1.5rem;
  }
`;

const HoldBidText = styled.span`
  flex: 1;
`;

export default function ProductPage() {
  const nav = useNavigate();
  return (
    <PageContainer>
      <TopMenu>
        <FiArrowLeft
          onClick={() => {
            nav(-1);
          }}
        />
        <Title>Artwork</Title>
        <BsThreeDots />
      </TopMenu>
      <ProductCard />
      <HoldBid>
        <AiOutlineShoppingCart />
        <HoldBidText>Confirm 4.0 tMeis bid</HoldBidText>
        <Button bgColor={Colors.CardBackground} color={Colors.Primary}>
          Hold to bid
        </Button>
      </HoldBid>
    </PageContainer>
  );
}
