import styled from "styled-components";

function PopOpenMenu({menuOpen}) {
    return (
        <Container menuOpen={menuOpen}>

        </Container>
     );
}

export default PopOpenMenu;

const Container = styled.div`
    height: 100%;
    width: 75%;
    Position: absolute;
    right: ${props => props.menuOpen ? '0' : '-75%'};
    background: red;
    transition: all 1s;
`;