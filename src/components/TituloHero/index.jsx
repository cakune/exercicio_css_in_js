import { TituloHero as TituloHeroEstilo } from './styles'

type Props = {
  children: string
}

const TituloHero = (props: Props) => (
  <TituloHeroEstilo>{props.children}</TituloHeroEstilo>
)

export default TituloHero
