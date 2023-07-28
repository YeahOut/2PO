import { Background, Icon, Typo } from "./styled";

export const SubTitle = ({ src, children }) => {
  return (
    <Background>
      <Typo>
        <Icon src={src} />
        {children}
      </Typo>
    </Background>
  );
};
