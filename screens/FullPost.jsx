import React from 'react'
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Loading from '../components/Loading';

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



export const FullPost = ({route, navigation}) => {
  const [isLoad, setIsLoad] = React.useState(true);
  const [data, setData] = React.useState();
  const{id, title} = route.params;

  

  React.useEffect(()=> {
    navigation.setOptions({
      title: title,
    });
    axios.get('https://66f9aa2bafc569e13a9967af.mockapi.io/articles/' + id)
    .then(({data})=> {
      setData(data);
    }).catch(err=>{
      console.log(err);
      Alert.alert('Ошибка', 'Не удаось загрузить статью');
    }).finally(()=>{
      setIsLoad(false);
    })
  }, []);
  
  if (isLoad) {
    return (
    
    <Loading></Loading>
  
    );
  }

  return (
    <View style={{padding: 20}}> 
    <PostImage source={{uri: data.imageUrl}}/>
    <PostText>{data.text}</PostText>
    </View>
  );
};


