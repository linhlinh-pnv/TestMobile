
import Profile from '../components/Profile';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDetail from './StackNavigate';
import MapView from '../components/MapView';
import { Image} from 'react-native';
import Home from '../components/Home';
import Detail from '../components/Detail';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeLinh"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Image
                source={require('../assets/img/homeicon.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#db0b23',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Image
                source={require('../assets/img/homeicon.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#db0b23',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Image
                source={require('../assets/img/usericon.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#db0b23',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapView}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Image
                source={require('../assets/img/usericon.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#db0b23',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default MyTabs;