import { Image, Text, StyleSheet, Pressable } from 'react-native';

type OptionsProps = {
  title: string;
  icon?: any;
  onPress: () => void;
  active?: boolean;
};

function Options({ title, icon, onPress, active = false }: OptionsProps) {
  return (
    <Pressable
      style={[
        styles.container,
        active ? styles.activeContainer : styles.defaultContainer,
      ]}
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.image} />}
      <Text style={active ? styles.activeText : styles.defaultText}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  defaultContainer: {
    backgroundColor: 'white',
  },
  activeContainer: {
    backgroundColor: 'black',
  },
  image: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  defaultText: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
  activeText: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'white',
  },
});

export default Options;
