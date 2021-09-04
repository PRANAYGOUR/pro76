import React, {Component} from React;
import { Text,View }   from "react-native";

export default class DailyPicScreen extends Component{
    render(){
        return(
            <View
                  
                style={{
                    flex : 1,
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                 <Text> Daily Pic Screen </Text>
            </View>
        );
    }
}

function App() {
    return (
    <NavigationContainer>
    <Stack. Navigator initialRouteName="Home" screenOptions={{
    headerShown: false
    }}>
    <Stack. Screen name="Home" component={HomeScreen} />
    <Stack. Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
    <Stack. Screen name="DailyPic" component={DailyPicScreen} />
    <Stack. Screen name="StarMap" component={StarMapScreen} />
    </Stack. Navigator>
    </NavigationContainer>
    );
    }