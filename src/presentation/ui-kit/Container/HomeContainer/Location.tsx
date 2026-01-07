import { Image, StyleSheet, TouchableOpacity } from 'react-native';

type LocationProp = {
  source: any;
  onPress: () => void;
};

const Location = ({ source, onPress }: LocationProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={[styles.image]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 236,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Location;
