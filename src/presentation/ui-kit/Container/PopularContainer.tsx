import { View, Text, StyleSheet } from 'react-native';
import CustomImageBackground from '..//Image/ImageBackground';

type PopularContainerProp = {
    name: string,
    location: string,
    image: string,
};

const PopularContainer = ({name, location, image}: PopularContainerProp) => {
  return (
    <View style={styles.popularContainer}>
      <CustomImageBackground
        source={image}
        width={232}
        height={195}
      />
      <Text style={styles.popularName}>{name}</Text>
      <Text style={styles.popularLocation}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    width: 242,
    height: 277,
    marginTop: 20,
    marginLeft: 30,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 4,
    alignContent: 'center',
  },
  popularName: {
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 14,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  popularLocation:{
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 23,
    marginHorizontal: 15,
  },
});
export default PopularContainer;
