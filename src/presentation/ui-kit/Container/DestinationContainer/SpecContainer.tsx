import { View, Text, StyleSheet } from 'react-native';

type SpecContainerProps = { title: string; text: string };

function SpecContainer({ title, text }: SpecContainerProps) {
  return (
    <View style={styles.specTextContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.specText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  specTextContainer: { marginHorizontal: 14 },
  titleText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'grey',
  },
  specText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
  },
});

export default SpecContainer;
