import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { FullPost } from "./FullPost";
const Stack = createNativeStackNavigator();
export const Navigation = () => {
   return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name= "Home" component={Home} options={{title: "Новости"}}/>
        <Stack.Screen name= "Post" component={FullPost} options={{title: "Статья"}}/>

        </Stack.Navigator>
    </NavigationContainer>
   )
}