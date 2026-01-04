import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
