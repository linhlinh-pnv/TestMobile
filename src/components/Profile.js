import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView, Button,
} from 'react-native';
import React from 'react';



const Profile = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <View style={styles.profileName}>
        <Image
          source={{
            uri: 'https://anhhd.com/wp-content/uploads/2021/11/avatar-cute-nam-31.jpg',
          }}
          style={styles.avatar}></Image>
      </View>

      <View style={styles.img_user}>
        <Text style={styles.userName}>Hi, Linh</Text>
        <Text>
          {' '}
          <Text>Welcome to Medtech</Text>
        </Text>
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button
          style={styles.button1}
          title="Submit"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  profileName: {
    flex: 1,
    flexDirection: 'row',
  },
  img_user: {
    marginLeft: 67,
    marginTop: 5,
  },
  container: {
    marginLeft: 40,
    marginTop: 30,
    flexDirection: 'row',
  },
  list: {
    flexDirection: 'row',
    flex: 1,
  },
  icon: {},
  input: {
    marginTop: 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  line: {
    marginLeft: 40,
  },
});
export default Profile;