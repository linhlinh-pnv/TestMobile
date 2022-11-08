
// import {useState} from 'react';
// import * as React from 'react';
// import 'react-native-gesture-handler';
// import {
//   StyleSheet,
//   Text,
//   StatusBar,
//   View,
//   Pressable,
//   Image,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
// } from 'react-native';

// export default function Home({navigation}) {
//   const Products = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       name: 'Accu-check Active Test Strip',
//       img: require('../assets/img/13.jpg'),
//       price: 112,
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       name: 'Omron HEM-8712 BP Monitor',
//       img: require('../assets/img/11.jpg'),
//       price: 150,
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       name: 'Accu-check Active Test Strip',
//       img: require('../assets/img/4.png'),
//       price: 112,
//     },
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb27ba',
//       name: 'Omron HEM-8712 BP Monitor',
//       img: require('../assets/img/12.jpg'),
//       price: 150,
//     },
//   ];
//   // topProduct
 
//   // all Products
//   const Product = ({name, img, price}) => (
//     <View style={styles.itemAllProduct}>
//       <Image style={styles.imgTopProduct} source={img} />
//       <Text style={styles.allNameTopProduct}>{name}</Text>
//       <Text style={styles.allPriceTopProduct}>${price}</Text>
//     </View>
//   );
//   const renderallProduct = ({item}) => (
//     <Product name={item.name} img={item.img} price={item.price} />
//   );

//   const onPressHandler = () => {
//     navigation.navigate('Detail');
//     // navigation.goBack();
//   };
//   return (
//     <View style={styles.body}>
//       <View style={styles.product}>
//         <Text style={styles.title3}>All Products</Text>
//         <SafeAreaView>
//           <FlatList
//             numColumns={2}
//             data={Products}
//             renderItem={renderallProduct}
//             keyExtractor={item => item.id}
//           />
//         </SafeAreaView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   text: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   banner: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1.5,
//   },
//   imgHeader: {
//     position: 'absolute',
//   },
//   title: {
//     position: 'absolute',
//     paddingRight: 120,
//   },
//   title1: {
//     color: '#1987FB',
//     fontSize: 18,
//     width: 110,
//     fontWeight: 'bold',
//   },
//   title2: {
//     fontSize: 12,
//     width: 170,
//     fontWeight: 'light',
//     color: '#b0c4d4',
//   },
//   image: {
//     borderRadius: 15,
//   },
//   topPro: {
//     flex: 2,
//   },
//   title3: {
//     position: 'relative',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   item: {
//     marginVertical: 20,
//     marginHorizontal: 10,
//   },
//   imgTopProduct: {
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     width: 100,
//     height: 100,
//   },
//   nameTopProduct: {
//     width: 100,
//     textAlign: 'center',
//     padding: 10,
//   },
//   product: {
//     flex: 3,
//   },
//   itemAllProduct: {
//     marginVertical: 10,
//     marginHorizontal: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#f2f4f6',
//     borderRadius: 15,
//   },
//   allNameTopProduct: {
//     width: 120,
//     height: 70,
//     padding: 10,
//     fontSize: 13,
//   },
//   allPriceTopProduct: {
//     paddingLeft: 10,
//     paddingBottom: 10,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });


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