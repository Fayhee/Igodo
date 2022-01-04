import styled from "styled-components";
import Colors from "../Colors";
import FeaturedTab from "./FeaturedTabs";
import MyBidsList from "./MyBidsList";
import PageContainer from "./styled/PageContainer.Styled";
import SearchBar from "./styled/SearchBar.Styled";
import Tabs from "./styled/Tabs.Styled";

const tabs = [
  { id: 1, title: "Featured", content: <FeaturedTab /> },
  { id: 2, title: "Collections", content: <div>Tab2</div> },
  { id: 3, title: "Artists", content: <div>Tab3</div> },
  { id: 4, title: "Tag", content: <div>Tab4</div> },
];

const Title = styled.h1`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Title>Naija Art</Title>
      <SearchBar />
      <Tabs tabs={tabs} />
      <MyBidsList />
    </PageContainer>
  );
}
