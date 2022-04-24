import React,{useState} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Button } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';
const App=()=> {
  const [show,setShow] = useState(false);
  const click = ()=>{
    setShow(!show)
  }
  return (
    <View style={styles.container}>
      <Button title={show?'OFF':'ON'}
        onPress={click}
      />
      {show?
        <LottieView style={styles.head}
          source={require('./lottie/fanON.json')}
          autoPlay={setShow}
        />
        :
        <LottieView
            style ={styles.head}
            source={require('./lottie/fan.json')}
            autoPlay={!setShow}
            />
        
      }
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  head:{
    width:100,
    height:100,
  
  },

});
