import { TouchableOpacity,StyleSheet,Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({items:item,pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.itemWrapper}>
                <Text style={styles.item}>{item.text}</Text>
                <MaterialIcons name="delete" size={18} color="black" />
                
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemWrapper: {
        padding: 16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius:10,
        textTransform: 'capitalize',
        flexDirection: 'row',
    },
    item:{
        marginRight:10,
    }
})