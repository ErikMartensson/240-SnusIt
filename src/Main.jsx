import styled from 'styled-components'
import FanWall from './FanWall'
import logo from './_images/240-logo.svg'
import instagramIcon from './_images/instagram-ico.svg'

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto 4em;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Header = styled.header`
  overflow: auto;
  text-align: center;
`

const Logo = styled.img`
  margin: 1em auto 0;
  width: 60%;

  @media (max-width: 768px) {
    width: 70%;
  }
`

const TextBox = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 0.6em;
  color: white;
  font-size: 1.6rem;
  margin: 0 2em;
  border-radius: 2px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 0.6em;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-top: 1.6em;
`

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.85);
  background: rgba(0, 0, 0, 0.6);
  font-size: 0.95rem;
  padding: 0.3em 0.9em;
  border-radius: 1em;

  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.8);
    text-decoration: none;
  }
`

const IconLink = styled.a`
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 0.5em;

  img {
    display: block;
    opacity: 0.85;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);

    img {
      opacity: 1;
    }
  }
`

function Main() {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="240 Snus It" />
      </Header>
      <FanWall />
      <TextBox>
        Vill du eller din 240 synas här?
        <br />
        <a
          href="https://tally.so/r/OD9dog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skicka in en bild!
        </a>
      </TextBox>
      <Footer>
        <FooterLink
          href="https://tally.so/r/1AyDRp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ta bort bild?
        </FooterLink>
        <IconLink
          href="https://www.instagram.com/240snusit.se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="240snusit.se på Instagram"
        >
          <img src={instagramIcon} width={20} height={20} alt="" />
        </IconLink>
      </Footer>
    </Wrapper>
  )
}

export default Main
