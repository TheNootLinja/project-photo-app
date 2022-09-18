import styled from "styled-components";
import { useState } from "react";

import TopNav from "../components/TopNav";
import PopOpenMenu from "../components/PopOpenMenu";

function testpage() {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleClick = () => {
      setMenuOpen(!menuOpen);
    }

    return (  
        <div>
            <TopNav handleClick={handleClick} menuOpen={menuOpen}/>
            <PopOpenMenu menuOpen={menuOpen}/>
            <TestText>Testing!</TestText>
        </div>
    );
}

export default testpage;

const TestText = styled.h1`
    color: orange;
    border-bottom: 1px solid green;
`;