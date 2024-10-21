import React from 'react'
import styled from 'styled-components/native';

const PostImage = styled.Image`
width: 100%;
height: 250px;
border-radius: 12px;
margin-bottom: 20px;
`;

const PostText = styled.Text`
font-size: 18px;
line-height: 24px;
`;

export const FullPost = () => {
  return (
    <>
    <PostImage source={{uri: "http://art.mau.ru/foto/dream/001.jpg"}}/>
    <PostText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis eum perspiciatis accusantium aut quae error obcaecati nesciunt iusto voluptates tenetur laboriosam, rerum minima nam reiciendis ducimus exercitationem dolores repellat.</PostText>
    </>
  )
}


