import { Text, View } from "react-native";
import styles from "./signInStyle";
import { useNavigation } from "@react-navigation/native";

function SignIn() {
    const navigation = useNavigation();
    return (
<View style={styles.container}>
    <Text>Sign In</Text>
</View>
    )
}

export default SignIn