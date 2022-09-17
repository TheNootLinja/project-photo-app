import styled from "styled-components";

function Post({user, photo}) {
    return ( 
        <PostContainer>
            <PostTopInfo>
                <AvatarPlaceholder/>
                <p>{user}</p>
            </PostTopInfo>
            <PostPhoto src={photo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam maxime debitis delectus incidunt ut deleniti exercitationem ullam expedita labore.</p>
        </PostContainer>
     );
}

export default Post;

const PostContainer = styled.div`
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >p {
        padding: 0 15px;
    }
`;

const AvatarPlaceholder = styled.div`
    height: 30px;
    width: 30px;
    background: orange;
    border-radius: 100%;
    margin: 0 10px;
`;

const PostTopInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const PostPhoto = styled.img`
    background: pink;
    height: 350px;
    width: 100%;
    object-fit: cover;
    max-width: 350px;
`;