import styled from "styled-components";
import Link from "next/link";

function Post({user, photo, numComments}) {
    return ( 
        <PostContainer>
            <PostTopInfo>
                <AvatarPlaceholder/>
                <p>{user}</p>
            </PostTopInfo>
            <PostPhoto src={photo} alt=""/>
            <ActionIconPHContainer>
                <ActionIconPH/>
                <ActionIconPH/>
                <ActionIconPH/>
            </ActionIconPHContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam maxime debitis delectus incidunt ut deleniti exercitationem ullam expedita labore.</p>
            <Link href="/postpage">
                <PostCommentsLinks>View {numComments} Comments</PostCommentsLinks>
            </Link>
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

const ActionIconPHContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
`;

const ActionIconPH = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin: 7px;
    background: red;
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

const PostCommentsLinks = styled.a`
    color: #8d8d8d;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: 20px;
    &:active {
        color: #545454;
    }
`;