import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './GUI/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground } from 'react-native-web';

export default function App() {

  return (
    <LinearGradient colors={['#fffffa', '#aaaaae']} style={styles.mainContainer}>
      <ImageBackground source={require('./assets/bg.png')} style={styles.mainContainer} resizeMode="cover" imageStyles={ {opacity: 0.5}}>
      <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  }
})
