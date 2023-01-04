import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

const StartGameScreen=(props) => {
    return(
        <div>
            <PrimaryButton> To jest pierwszy baton!</PrimaryButton>
            <PrimaryButton></PrimaryButton>
        </div>
    )
}

export default StartGameScreen;