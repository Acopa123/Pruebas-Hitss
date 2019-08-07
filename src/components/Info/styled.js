import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${props => props.imageBackground});
  background-size: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: end;
  flex-direction: row;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 575px;
  height: 320px;
`;

const Data = styled.div`
  padding: 0px 60px 0px 60px;
`;

const Title = styled.h1`
  color: #ecaf2a;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
`;

const Span = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  font-family: sans-serif:
`;

const Div = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

export { Container, Img, Data, Title, Description, Span, Div }
