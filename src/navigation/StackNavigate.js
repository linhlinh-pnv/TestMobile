import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../components/Detail';
import Home from '../components/Home';

const Stack = createNativeStackNavigator();

function StackDetail(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={Home}/>
            <Stack.Screen name= "Detail" component={Detail}/>
        </Stack.Navigator>
    );
}
export default StackDetail;

