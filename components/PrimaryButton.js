import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

const PrimaryButton=(props) => {

    function pressHandler()
    {
        console.log("hola amigo")
    }

    return(

        <View style={styles.btnContainer} android_ripple={{color: "dark"}}>
            <Pressable onPress={pressHandler}>
                <Text style={styles.btnText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
btnContainer:{
    backgroundColor: 'blue',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 5
},
btnText:
{
    color: "white",
    textAlign: "center"
}
})