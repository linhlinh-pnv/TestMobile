import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        title: 'Second Item',
        img: require('../assets/img/11.jpg'),
    },
    {
        id: '2',
        title: 'Third Item',
        img: require('../assets/img/6.jpg'),

    },
    {
        id: '3',
        title: 'First Item',
        img: require('../assets/img/5.png'),

    },
    {
        id: '4',
        title: 'Second Item',
        img: require('../assets/img/7.jpg'),

    },
    {
        id: '5',
        title: 'Third Item',
        img: require('../assets/img/10.jpg'),

    }, ,    
    {
        id: '6',
        title: 'Third Item',
        img: require('../assets/img/8.jpg'),

    }, ,
    {
        id: '7',
        title: 'Third Item',
        img: require('../assets/img/9.jpg'),

    },
];
const Products = () => {
  const navigation = useNavigation()
  const windowWidth = Dimensions.get('window').width;
  const renderItem = ({item}) => (
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Detail')}
          style={[
              styles.item,{
                  width: (windowWidth - 66) / 2,
              },
          ]}
          >
          <Image
              style={styles.picture}
              source={item.img}
          />
          <Text>{item.title}</Text>
      </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
          <FlatList
              showsVerticalScrollIndicator ={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              data={DATA}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
      marginTop: 20,
  },
  item: {
      Width: 157,
      height:250,
      backgroundColor:'#BBBBB',
      marginVertical:20,
       
  },
  picture: {
      top: 15,
      width: 116,
      height: 119,
  },
});
export default Products;