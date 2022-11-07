import { 
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'LinhLinh',
    img: require('../assets/img/15.jpg'),
  },
  {
    id: '2',
    title: 'LinhLinh',
    img: require('../assets/img/13.jpg'),
  },
  {
    id: '3',
    title: 'LinhLinh',
    img: require('../assets/img/14.jpg'),
  },
  {
    id: '4',
    title: 'Second Item',
    img: require('../assets/img/5.png'),
  },
  {
    id: '5',
    title: 'Third Item',
    img: require('../assets/img/6.jpg'),
  },
  ,
  {
    id: '6',
    title: 'Third Item',
    img: require('../assets/img/7.jpg'),
  },
  ,
  {
    id: '7',
    title: 'Third Item',
    img: require('../assets/img/8.jpg'),
  },
];
const TopProducts = () => {
    const navigation = useNavigation()
    return (
            <ScrollView style ={styles.container} horizontal showsHorizontalScrollIndicator={false} >
                {DATA.map((ele,index) => {
                    return (
                        <TouchableOpacity 
                        onPress={()=> navigation.navigate('Detail')}
                        key={index} style={styles.item}>
                            <Image
                                style={styles.picture}
                                source={ele.img}
                            />
                             
                            <Text style={styles.title}>{ele.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
    );
};
const styles = StyleSheet.create({
    
    container: {
      height: 200,
      top: 60,
    },
    item: {
        width:110,
        height:162,
        marginLeft: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor:'#F5F7FA',
    

        
    },
    title: {
        textAlign: 'center',
        margin: 5,
    },
    picture: {
        width: 119,
        height: 100,
    },
});
export default TopProducts;