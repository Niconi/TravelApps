import { TouchableOpacity, Image, StyleSheet } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  source: any;
  size: number;
  border?: boolean;
  width: number;
  height: number;
};

const ButtonIcon = ({ onPress, source, size, border, width, height }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.iconContainer,{borderWidth:border ? 1 : 0, width: width, height: height}]} onPress={onPress}>
      <Image source={source} style={{ width: size, height: size }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'grey',
  },
});

export default ButtonIcon;
