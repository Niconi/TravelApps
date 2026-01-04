import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Wishlist = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;
