import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ArticleProp = {
  source: any;
  name: string;
  author: string;
  date: string;
  onPress: () => void;
};

const Article = ({ source, name, author, date, onPress }: ArticleProp) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Image source={source} style={[styles.image]} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 305,
    height: 227,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    borderColor: '#E2E8F0',
    borderWidth: 1,
  },
  image: {
    width: 305,
    height: 135,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'medium',
    marginHorizontal: 15,
    marginTop: 11,
  },
  author: { fontSize: 12, fontWeight: 'regular', marginHorizontal: 15 },
  date: {
    fontSize: 9,
    fontWeight: 'regular',
    marginHorizontal: 15,
    marginTop: 11,
  },
});

export default Article;
