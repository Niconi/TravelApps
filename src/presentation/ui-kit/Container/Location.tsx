import { Image, StyleSheet } from 'react-native';

type LocationProp = {
  source: any;
};

const Location = ({ source }: LocationProp) => {
  return <Image source={source} style={[styles.image]} />;
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
