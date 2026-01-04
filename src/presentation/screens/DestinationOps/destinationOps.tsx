import { View, Text } from 'react-native';
import CustomImageBackground from '../../ui-kit/Image/ImageBackground';
import { useNavigation } from '@react-navigation/native';

const Location = () => {
    const navigation = useNavigation();
    return (
        <View>
            <CustomImageBackground source={require('../../assets/images/home/Semeru.png')} />
            <Text>Location</Text>
        </View>
    );
};

export default Location;