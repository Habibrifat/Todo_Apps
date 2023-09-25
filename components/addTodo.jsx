import { useState } from "react"
import { TextInput, View,StyleSheet, Button } from "react-native";


export default function AddTodo({submitHandler}){

    const [text, setText] = useState('');

    const changeHandler = (inputText) => {
        setText(inputText);
    }

    const handleAddTodo = () => {
        submitHandler(text); // Call the submitHandler with the text value
        setText(''); // Clear the input field by setting it to an empty string
      }
      
    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            {/* <Button onPress={() => submitHandler(text)} title="add todo" color='coral'/> */}
            <Button onPress={handleAddTodo} title="add todo" color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'coral',
    }
});