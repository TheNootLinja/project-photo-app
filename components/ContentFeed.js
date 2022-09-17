import styled from "styled-components";

import Post from "./Post";

function ContentFeed() {
    const placeholderData = [
        {
            user: 'TheNootLinja',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'https://i.ebayimg.com/images/g/4E4AAOSwSkRdiyTc/s-l500.jpg'
        },
        {
            user: 'GundamNerd',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'https://i0.wp.com/www.gunpla101.com/wp-content/uploads/2022/06/hg-ibo-gundam-asmoday-07th.jpeg?resize=829%2C622&ssl=1'
        },
        {
            user: 'PlasticMaster',
            created: '09/13/2022 14:55',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad amet deserunt dignissimos officia impedit vero ea eos autem aspernatur',
            photo: 'https://i0.wp.com/www.gunpla101.com/wp-content/uploads/2021/01/GundamMarchosias-169.jpg?resize=1000%2C563&ssl=1'
        },
    ]
    return ( 
        <Container>
            {placeholderData.map(item => (
                <Post user={item.user} photo={item.photo} key={item.user}/>
            ))}
        </Container>
     );
}

export default ContentFeed;

const Container = styled.div`
    margin-top: 60px;
    margin-bottom: 50px;
`;

// const Post = styled.div`
//     border: 1px solid black;
//     margin-bottom: 10px;
// `;