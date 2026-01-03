
import { StyleSheet, View, ImageBackground } from "react-native";

type ImageBackgroundProps = {
    source: any;
    width?: number;
    height?: number;
};

const CustomImageBackground = ({ source, width, height }: ImageBackgroundProps) => {
    return (
        <View>
            <ImageBackground
                source={source}
                style={[styles.imageBackground, {width: width, height: height}]}
            ></ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        width: 200,
        height: 200,
    },
});

export default CustomImageBackground;
