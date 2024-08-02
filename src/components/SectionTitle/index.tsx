import { Box } from "@mui/material";
import styled from "styled-components";

interface Props {
  Entitle: string;
  KoTitle: string;
}

const SectionTitle = ({ Entitle, KoTitle }: Props) => {
  return (
    <Container>
      <En>{Entitle}</En>
      <Ko>{KoTitle}</Ko>
    </Container>
  );
};

export default SectionTitle;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  span {
    font-size: 16px;
  }
`;

const En = styled.span`
  color: #89757a;
`;
const Ko = styled.span`
  color: #333;
`;
