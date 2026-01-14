import { Text, View, StyleSheet } from 'react-native';
import ButtonIcon from '../../Button/ButtonIcon/ButtonIcon';

type SectionTitleProps = {
  title: string;
  icon?: any;
};

function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {icon && (
        <ButtonIcon
          source={icon}
          size={12}
          border={false}
          width={25}
          height={25}
          onPress={() => {}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'medium',
    color: 'black',
    marginBottom: 10,
  },
});

export default SectionTitle;
