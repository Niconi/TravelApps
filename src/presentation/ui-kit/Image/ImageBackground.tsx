import { StyleSheet, View, ImageBackground, Text } from 'react-native';

type ImageBackgroundProps = {
  source: any;
  text: string;
  width?: number;
  height?: number;
};

const CustomImageBackground = ({
  source,
  text,
  width,
  height,
}: ImageBackgroundProps) => {
  return (
    <View>
      <ImageBackground
        source={source}
        style={[styles.imageBackground, { width: width, height: height }]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {},
  textContainer: {
    width: 52,
    height: 21,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 14,
    marginBottom: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'medium',
  },
});

export default CustomImageBackground;
