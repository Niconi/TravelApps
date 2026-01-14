import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CircleButtonProps = {
  title: string;
  icon?: any;
  onPress: () => void;
};

function CircleButton({ title, icon, onPress }: CircleButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Image source={icon} style={styles.image} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 40,
    padding: 5,
  },
  image: {
    width: 14,
    height: 14,
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'light',
    color: 'black',
  },
});

export default CircleButton;
