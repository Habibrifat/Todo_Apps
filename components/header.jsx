import { Button, FlatList, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:40,
        backgroundColor: 'coral',
    },
    title:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})