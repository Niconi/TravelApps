import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SearchContainerProps = {
    destination: string;
    location: string;
    onPress: () => void;

};

function SearchContainer({ destination, location, onPress }: SearchContainerProps) {
    return (
        <TouchableOpacity style={styles.searchContainer} onPress={onPress}>
            <Text style={styles.searchText}>{destination}</Text>
            <Text style={styles.searchText}>{location}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
searchContainer: {
    width: 350,
    height: 50,
    backgroundColor: 'white',
},
searchText: {
    fontSize: 12,
    fontWeight: 'regular',
}

});

export default SearchContainer;