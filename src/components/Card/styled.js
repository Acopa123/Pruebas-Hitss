import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  border-radius: 5px;
  position: relative;
  width: 490px;
  height: 275px;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 1;
  :hover {
    z-index: 0;
  }
`;

const Content = styled.a`
  border-radius: 5px;
  position: absolute;
  width: 96%;
  height: 93%;
  cursor: pointer;
  padding: 10px;
  :hover {
    z-index: 2;
    transition: .3s;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
`;

const Span = styled.span`
  color: #fff;
  font-weight: ${({fontWeight}) => fontWeight && `bold`};
`;

const Info = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export {Container, Img, Content, Title, Description, Span, Data, Info}
