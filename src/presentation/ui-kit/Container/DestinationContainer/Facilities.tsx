import { View, Image, Text, StyleSheet } from 'react-native';

type FacilitiesProps = {
  title: string;
  icon?: any;
  onPress: () => void;
};

function Facilities({ title, icon, onPress }: FacilitiesProps) {
  return (
    <View style={styles.container}>
      {icon && <Image source={icon} style={styles.image} />}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 14,
    height: 14,
    marginRight: 15,
  },
  text: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
});

export default Facilities;
