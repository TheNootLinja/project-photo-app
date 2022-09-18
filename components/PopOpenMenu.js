import styled from "styled-components";
import Link from "next/link";

function PopOpenMenu({menuOpen}) {
    return (
        <Container menuOpen={menuOpen}>
            <ul>
                <li>
                    <Link href='/'>
                        <MenuOption>Option #1</MenuOption>
                    </Link>
                </li>
                <li>
                    <MenuOption>Option #1</MenuOption>
                </li>
                <li>
                    <MenuOption>Option #1</MenuOption>
                </li>
            </ul>
        </Container>
     );
}

export default PopOpenMenu;

const Container = styled.div`
    height: 100%;
    width: 75%;
    Position: absolute;
    left: ${props => props.menuOpen ? '0' : '-75%'};
    background: #6f6f6f;
    transition: all 1s;
    >ul li {
        list-style: none;
        padding: 10px;
    }
`;

const MenuOption = styled.a`
    color: white;
`;

