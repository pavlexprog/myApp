import axios from 'axios';
import { View, SafeAreaView, Text,
   ActivityIndicator, 
   RefreshControl,
   TouchableOpacity
  } from 'react-native';
import { Post } from '../components/Post';
import React, {useState} from 'react';
import { FlatList } from 'react-native';


 
export const Home = ({navigation}) => {
  const [isLoad, setIsLoad] = React.useState(true);
  const [itm, setItm] = useState([]);

  const fetchPosts = () =>{
    setIsLoad(true);
    axios.get('https://66f9aa2bafc569e13a9967af.mockapi.io/articles')
    .then(({data})=> {
      setItm(data);
    }).catch(err=>{
      console.log(err);
      alert('Ошибка при поучении статей');
    }).finally(()=>{
      setIsLoad(false);
    })
  }

  React.useEffect(fetchPosts, []);

  if (isLoad) {
    return (<View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator size ="large"/>
      <Text style={{marginTop: 15}}>Загрузка...</Text>
    </View>
    );
  }

  return (
    <SafeAreaView style={{ flex:1}}>
    <View>
 
       <FlatList
      refreshControl={<RefreshControl refreshing={isLoad} onRefresh={fetchPosts} />}
      data={itm}
      renderItem={({item}) => (
       <TouchableOpacity onPress={()=> navigation.navigate('Post', {id: item.id, title: item.title})}>
         <Post title={item.title} imageUr={item.imageUrl} createdAt={item.createdAt}/>
       </TouchableOpacity>
      )}
      /> 
      
    
        {/* {itm && itm.length > 0 ? (
        [... itm, ... itm].map((obj)=>(
          <Post
          key={obj.id}
      title={obj.title}
      createdAt={obj.createdAt}
      imageUr = {obj.imageUrl}
      />
        ))
        
      ) : (
        <View>
          <Text>Загрузка...</Text>
        </View>
      )} */}

      {/* <StatusBar theme="auto"/> */}
    </View>
    </SafeAreaView>
  ); 
}



