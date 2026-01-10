import { Image, Text, View, StyleSheet } from 'react-native';

type OptionsProps = {
  title: string;
  icon?: any;
};

function Options({ title, icon }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
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
    borderRadius: 5,
    padding: 5,
  },
  image: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  text: {
    fontSize: 10,
    fontWeight: 'light',
    color: 'black',
  },
});

export default Options;
