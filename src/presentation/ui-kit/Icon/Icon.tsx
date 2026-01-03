import { View, StyleSheet, Image } from "react-native";

type IconProps = {
    source: any;
    size: number;
};

const Icon = ({ source, size }: IconProps) => {
    return (
        <View style={styles.container}>
            <Image
                source={source}
                style={{ width: size, height: size }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
});

export default Icon;
