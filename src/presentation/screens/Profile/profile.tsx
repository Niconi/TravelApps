import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
