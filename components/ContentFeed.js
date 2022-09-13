import styled from "styled-components";

function ContentFeed() {
    const placeholderData = [
        {
            user: 'TheNootLinja',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'Blank'
        },
        {
            user: 'GundamNerd',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'Blank'
        },
        {
            user: 'PlasticMaster',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'Blank'
        },
    ]
    return ( 
        <Container>
            {placeholderData.map((item) => (
                <Post>
                    <p>{item.user}</p>
                    <p>{item.description}</p>
                </Post>
            ))}
        </Container>
     );
}

export default ContentFeed;

const Container = styled.div`
    margin-top: 95px;
`;

const Post = styled.div`
    border: 1px solid black;
    margin-bottom: 10px;
`;