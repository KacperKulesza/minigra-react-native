import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen=(props) => {
    return(
        <View style={styles.game}>
            <TextInput style={styles.inputContainer}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        padding: 5,
        margin: 5,
        backgroundColor: "lightblue",
        borderRadius: 28
    },
    game:{
        elevation: 10,
        borderWidth: 2,
        borderRadius: 28,
        borderColor: "#ebebff",
        backgroundColor: "#ebebed",
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})