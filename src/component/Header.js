import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>BEBE Bank</NameTag>
      <LoginButtomTag onClick={onClick}>Вхід</LoginButtomTag>
    </HeaderTag>
  );
}

const LoginButtomTag = styled.div`
  color: #00ff7f;
  padding: 8px 32px;
  border: 1px solid#faaa;
  border-radius: 10px;
  cursor: pointer;
`;

const NameTag = styled.div`
  color: DarkRed;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: linear-gradient(
    0deg,
    rgba(188, 143, 143) 10%,
    rgba(255, 69, 0) 70%
  );

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #aaa;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
