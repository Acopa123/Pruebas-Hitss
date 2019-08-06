import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  border-radius: 5px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  width: 448px;
  height: 251px;
  border-radius: 5px;
  z-index: 1;
  :hover {
    z-index: 0;
  }
`;

const Content = styled.a`
  border-radius: 5px;
  position: absolute;
  width: 428px;
  height: 231px;
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
