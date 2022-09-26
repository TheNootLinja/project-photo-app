import styled from "styled-components";
import Link from "next/link";

function PopOpenMenu({menuOpen}) {
    return (
        <div>
            <Container menuOpen={menuOpen}>
                <ul>
                    <MenuOptionContainer>
                        <Link href='/'>
                            <MenuOption>Profile</MenuOption>
                        </Link>
                    </MenuOptionContainer>
                    <MenuOptionContainer>
                        <MenuOption>Saved</MenuOption>
                    </MenuOptionContainer>
                    <MenuOptionContainer>
                        <MenuOption>Settings</MenuOption>
                    </MenuOptionContainer>
                    <MenuOptionContainer>
                        <MenuOption>Logout</MenuOption>
                    </MenuOptionContainer>
                </ul>
            </Container>
            <ScreenLockout menuOpen={menuOpen}/>
        </div>
     );
}

export default PopOpenMenu;

const Container = styled.div`
    z-index: 2;
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

const MenuOptionContainer = styled.li`
    padding-top: 100px;
`;

const ScreenLockout = styled.div`
    height: 100%;
    width: 100%;
    background: RGBA(0,0,0,.75);
    position: absolute;
    z-index: ${props => props.menuOpen ? '1' : '-100'};
    opacity: ${props => props.menuOpen ? '100%' : '0'};
    transition: opacity 1s;
`;

