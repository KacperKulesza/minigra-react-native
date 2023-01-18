import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react'

const StartGameScreen=(props) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    function confirmHandler()
    {
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <= 0){
            Alert.alert('Invalid number', 'The number must be between 1 and 99', 
            [{text:'Okay', style: 'destructive', onPress: {resetInputHandler}}])
        }
    }

    function resetInputHandler()
    {
        setEnteredNumber('');
    }

    function enteredNumberHandler(enterNumber)
    {
        console.log(enterNumber)
        setEnteredNumber(enterNumber)
    }

    return(
        <View style={styles.game}>
            <TextInput style={styles.inputContainer}
             onChangeText={enteredNumberHandler} 
             maxLength={2}
             value={enteredNumber}/>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
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
        backgroundColor: "#9F74B7",
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})