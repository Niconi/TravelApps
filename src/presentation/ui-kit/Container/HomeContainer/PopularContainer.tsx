import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomImageBackground from '../../Image/ImageBackground';

type PopularContainerProp = {
  name: string;
  location: string;
  image: string;
  type: string;
  onPress: () => void;
};

const PopularContainer = ({
  name,
  location,
  image,
  type,
  onPress,
}: PopularContainerProp) => {
  return (
    <TouchableOpacity style={styles.popularContainer} onPress={onPress}>
      <CustomImageBackground source={image} width={232} height={195} text={type} />
      <Text style={styles.popularName}>{name}</Text>
      <Text style={styles.popularLocation}>{location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    width: 242,
    height: 277,
    marginTop: 20,
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
  popularLocation: {
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 23,
    marginHorizontal: 15,
  },
});
export default PopularContainer;
