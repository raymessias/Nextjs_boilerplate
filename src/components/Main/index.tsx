import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = ' Typescript, ReactJS e NextJS Styled Components'
}) => (
  <S.wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frente para uma tela com códigos"
    />
  </S.wrapper>
)

export default Main
