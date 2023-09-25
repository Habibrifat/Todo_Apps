import { View,Text,StyleSheet } from "react-native";


export default function SandBox(){
    return(
        <View style={styles.container} >
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
            <Text style={styles.boxFive}>Five</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 20,
        backgroundColor:'#ddd',
    },
    boxOne: {
        backgroundColor:'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor:'gold',
        padding: 20,
    },
    boxThree: {
        backgroundColor:'coral',
        padding: 30,

    },
    boxFour: {
        backgroundColor:'cyan',
        padding: 20,
    },
    boxFive: {
        backgroundColor:'skyblue',
        padding: 10,
    },
})