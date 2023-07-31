import styled, {css} from "styled-components";

const customMargin = css`
  margin: ${(props) =>
    `${props.top || "0px"} ${props.right || "0px"} ${props.bottom || "0px"} ${
      props.left || "0px"
    }`};
`;

const fontWeight = css`
  font-weight: ${(props) => props.fontWeight || "600"};
`;

export const BackContainer = styled.div`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextBox = styled.div`
display:flex;
flex-direction: column;
  width: 819px;
  height: auto;
align-item:center;
justify-content:center;
`;

export const TypoBox = styled.div`
  display: flex;
  width: 819px;
  height: auto;
  align-item: center;
  justify-content: center;
`;

export const Typo = styled.span`
  display: flex;
  color: ${(props) => props.color || "black"};
  font-family: Inter;
  font-size: ${(props) => props.size || "15px"};
  font-style: normal;
  ${fontWeight}
  line-height: 200.73%;
  letter-spacing: -0.8px;
  margin-left: 90px;
  ${customMargin}
  justify-content:${(props) => props.justifyContent || "center"};
`;

export const Image = styled.img`
  width: ${(props) => props.width || "400px"};
  height: 400px;
  border-radius: 40px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 80px;
`;

export const ImageBox = styled.div`
    width:819px;
    weight:500px;
    display: flex;
    align-item: center;
    gap:50px;
`;