import { Image, StyleSheet } from 'react-native';

type PromoContainerProp = {
  source: any;
};

const PromoContainer = ({ source }: PromoContainerProp) => {
  return <Image source={source} style={[styles.image]} />;
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
