import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import logo from "../../assets/logo.png";

import {
  Container,
  // FLink,
  FooterCopy,
  FooterDetails,
  FooterLogo,
  FooterNav,
  FooterSocials,
} from "./styles";

function Footer() {
  return (
    <Container>
      {/* Logo */}
      <FooterLogo>
        <img src={logo} alt="Mozadevz" />
      </FooterLogo>

      {/*Navigation
               * /}
      <FooterNav>
        <a href="/" >Programas</a>
           < a href = "/">Equipe</a>
        <a href="/" >Sobre</a>
                                     < a href = "/">
          Contacto</a>
      </FooterNav>

      {/* Footer Details */}
      <FooterDetails>
        <FooterSocials>
          <i>
            <img src={facebook} alt="mozdevz facebook" />
          </i>
          <i>
            <img src={twitter} alt="mozdevz twitter" />
          </i>
        </FooterSocials>
        <FooterCopy>{"<MOZDEVZ />"}.Todos os direitos reservados.</FooterCopy>
      </FooterDetails>
    </Container>
  );
}

export default Footer;
