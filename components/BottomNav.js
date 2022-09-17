import styled from "styled-components";

function BottomNav() {
    return ( 
        <Container>
            <IconPlaceholder />
            <IconPlaceholder />
            <IconPlaceholder />
        </Container>
     );
}

export default BottomNav;

const Container = styled.div`
    height: 55px;
    width: 100%;
    background: #292929;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const IconPlaceholder = styled.div`
    height: 40px;
    width: 40px;
    background: red;
    border-radius: 100%;
`;