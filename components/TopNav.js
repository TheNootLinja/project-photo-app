import styled from "styled-components";

function TopNav({handleClick, menuOpen}) {
    return ( 
        <Nav>
            <p>Plastagram</p>
            <AvatarPH onClick={handleClick}/>
        </Nav>
     );
}

export default TopNav;

const Nav = styled.nav`
    height: 60px;
    background: #292929;
    width: 100%;
    display: flex;
    color: white;
    position: fixed;
    top: 0;
    >p {
        margin: auto;
        font-size: 29px;
        margin-top: 10px;
    }
`;

const AvatarPH = styled.div`
    height: 49px;
    width: 49px;
    background: black;
    border-radius: 100%;
    position: fixed;
    left: 13px;
    top: 5px;
    z-index: 20;
`;