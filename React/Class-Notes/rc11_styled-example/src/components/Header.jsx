import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png"></Logo>
          <div>
            <Button color="#A62440">Apply Courses</Button>
            <Button bg="#A62440">Talk to Advisor</Button>
          </div>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
