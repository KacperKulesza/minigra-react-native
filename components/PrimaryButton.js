import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

const PrimaryButton=(props) => {

    return(

        <View style={styles.btnContainer}>
            <Pressable onPress={props.onPress} android_ripple={{color: "dark"}}>
                <Text style={styles.btnText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
btnContainer:{
    backgroundColor: '#8D46B6',
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