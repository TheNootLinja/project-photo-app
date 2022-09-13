import styled from "styled-components";

function TopNav() {
    return ( 
        <Nav>
            <p>Plastagram</p>
            <AvatarPH />
        </Nav>
     );
}

export default TopNav;

const Nav = styled.nav`
    height: 94px;
    background: #292929;
    width: 100%;
    display: flex;
    color: white;
    position: fixed;
    >p {
        margin: auto;
        font-size: 29px;
        margin-top: 35px;
    }
`;

const AvatarPH = styled.div`
    height: 49px;
    width: 49px;
    background: black;
    border-radius: 100%;
    position: fixed;
    right: 13px;
    top: 33px;
`;