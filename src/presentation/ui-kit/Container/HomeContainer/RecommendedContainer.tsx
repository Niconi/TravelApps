import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import CustomImage from '../../Image/Images';

type RecommendedContainerProp = {
  name: string;
  type: string;
  location: string;
  image: string;
  onPress: () => void;
};

const RecommendedContainer = ({
  name,
  type,
  location,
  image,
  onPress,
}: RecommendedContainerProp) => {
  return (
    <TouchableOpacity style={styles.recommendedContainer} onPress={onPress}>
      <CustomImage source={image} width={68} height={74} />
      <View>
        <Text style={styles.recommendedName}>{name}</Text>
        <Text style={styles.recommendedType}>{type}</Text>
        <Text style={styles.recommendedLocation}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recommendedContainer: {
    width: 350,
    height: 80,
    marginLeft: 30,
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
    flexDirection: 'row',
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 10,
    marginHorizontal: 15,
  },
  recommendedType: {
    fontSize: 10,
    width: 40,
    fontWeight: 'semibold',
    marginBottom: 9,
    marginHorizontal: 15,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  recommendedLocation: {
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 8,
    marginHorizontal: 15,
  },
});
export default RecommendedContainer;
