// import {View,Text,Button} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// function Detail ({navigation}){
//     return(
//     <View  style={{fex:1, alignItems: 'center'}}>
//         <Text>Welcome to my detail</Text>
//         <Text>
//             <Icon name="rocket" color="red" size={30} />
//             <Icon name="home" color="green" size={30} />
//             <Icon name="heart" color="yellow" size={30} />
//         </Text>
//         <Button title='come back Home' onPress={() => navigation.navigate('Home')}/>
//     </View>
//     );
// }
// export default Detail;
import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView from './MapView';
// import Map from './Map';
// import styles from'../assets/style/pageStyle'

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.slide}
        source={require('../assets/img/flat-lay-pills-syringe-with-copy-space1.png')}
      /> */}

      <Text
        style={{fontWeight: '900', fontSize: 22, color: '#090F47', left: 20}}>
        Sugar Free Gold Low Calories{' '}
      </Text>
      <Text style={styles.captionTitle}> Etiam mollis metus mon purus</Text>
      <View style={styles.logo}>
        <Image
          style={styles.slideImage}
          source={require('../assets/img/10.jpg')}
        />
      </View>
      <View style={styles.introDetail}>
        <View>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 22,
              color: '#090F47',
              left: 20,
            }}>
            $56
          </Text>
          <Text style={styles.addTitle}>Etiam mollis</Text>
        </View>
        <View>
          <Text style={styles.addCart}>Add to cart</Text>
        </View>
      </View>
      <View style={styles.productPackage}>
        <Text style={styles.titlePackage}>Package size</Text>
        <View style={styles.pricingModel}>
          <View style={styles.priceIndi}>
            <Text style={styles.priceFi}>$106</Text>
            <Text style={styles.titleFi}>50 pellets</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.price}>$166</Text>
            <Text style={styles.title}>110 pellets</Text>
          </View>
          <View style={styles.priceAva}>
            <Text style={styles.price}>$252</Text>
            <Text style={styles.title}>300 pellets</Text>
          </View>
        </View>
      </View>
      {/* <View>
        <Text style={styles.discript}>Product Details</Text>
      </View> */}
      <View><Text></Text></View>
      <Button style={styles.button1}
        title="come back Home"
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '300',
    left: 10,
  },
  captionTitle: {
    color: '#090F47',
    left: 20,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  slideImage: {
    width: 100,
    height: 100,
  },

  introDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCart: {
    marginLeft: 200,
    color: '#006AFF',
    fontSize: 22,
  },
  addTitle: {
    color: '#090F47',
    left: 20,
  },
  productPackage: {
    marginTop: 30,
    right: 20,
  },
  pricingModel: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 20,
  },
  price: {
    fontSize: 19,
    fontWeight: '900',
    color: '#090F47',
  },
  title: {
    fontsize: 12,
  },
  priceFi: {
    fontSize: 19,
    fontWeight: '900',
    color: '#FFA41B',
  },
  titlePackage: {
    color: '#090F47',
    fontSize: 16,
    left: 40,
  },
  titleFi: {
    fontsize: 12,
    color: '#FFA41B',
  },
  priceAva: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  priceIndi: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    borderWidth: 2,
    paddingVertical: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  discript: {
    top: 10,
    fontWeight: 'bold',
  },
  button1:{
    marginTop:500,
    width: 50,
  }
});
export default Detail;
