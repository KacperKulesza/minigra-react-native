import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './components/StartGameScreen';

export default function App() {
  return (
    <div>
      <StartGameScreen></StartGameScreen>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
