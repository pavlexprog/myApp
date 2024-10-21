
import styled from 'styled-components/native';

const PostView = styled.View`
flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
width: 60px;
height: 60px;
border-radius: 12px;
`;

const PostTitle = styled.Text`
font-size: 18px;
font-weight: 700;
`;

const PostDate = styled.Text`
margin-top: 2px;
font-size: 12px;
color: rgba(0,0,0,0.4);
`;

const PostDetails = styled.View`
flex: 1;
margin-left: 10px;
justify-content: center;

`;
export const Post = ({title, imageUr, createdAt}) => {
    return <PostView>
    <PostImage source={{uri: imageUr}}/>
    
    <PostDetails>
      <PostTitle >{title}</PostTitle>
      <PostDate>{createdAt}</PostDate>
    </PostDetails>  
  </PostView>
}