import { Image, StyleSheet, TouchableOpacity } from 'react-native';

type PromoContainerProp = {
  source: any;
  onPress: () => void;
};

const PromoContainer = ({ source, onPress }: PromoContainerProp) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={source} style={[styles.image]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 100,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default PromoContainer;
