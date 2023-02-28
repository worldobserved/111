import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195) 10%,
    rgba(253, 187, 45) 20%,
    rgba(64, 224, 208) 70%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
