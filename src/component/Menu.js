import styled from "styled-components";

export default function Menu({ config }) {
  return (
    <MenuBlock>
      {/* в config нам приходить список кнопок
        за допомогою .map() ми для кожної кнопки
        виводимо HTML верстку
      */}
      {config.map((menu) => (
        <ButtonSendBlock onClick={menu.onClick}>
          <ButtonSendIcon>
            {/* тут ми підгружаємо зображення, задаємо ширину та висоту */}
            <img src={menu.img} width="30px" height="30px" />
          </ButtonSendIcon>
          <ButtonSendText>{menu.name}</ButtonSendText>
        </ButtonSendBlock>
      ))}
    </MenuBlock>
  );
}

const ButtonSendBlock = styled.button`
  /* відступи між картинкою та текстом кнопках */
  gap: 12px;

  /* додаємо можливість робити 
  плавну анімацію на 0.7 секунд */
  transition: opacity 0.7s;

  /* при наведенні на блок, курсор буде виглядати
    як у клікабельних елементах
   */
  cursor: pointer;

  /* при наведенні на блок 
    він стає прозорим на 30% (1 - 0.7)
   */
  &:hover {
    opacity: 0.7;
  }

  /* === */

  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuBlock = styled.div`
  display: flex;
  padding: 0 40px;
  gap: 18px;
  justify-content: space-around;
  width: 100%;
`;

const ButtonSendIcon = styled.div`
  height: 70px;
  width: 70px;
  background: #afeeee;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonSendText = styled.div`
  font-weight: 400;
  font-size: 17px;
  color: #fff0f5;
  line-height: 22px;
  text-align: center;
  width: 100%;
`;
