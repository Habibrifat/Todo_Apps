import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View,TouchableOpacity,Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Test from './components/Test';
import Header from './components/header';
import TodoItem from './components/tofdoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandbox';

export default function App() {
  const [todos,setTodos] = useState([
    {text: 'buy a Coffee',key:'1'},
    {text: 'Nice A Cup',key:'2'},
    {text: 'Plz give me a Tea',key:'3'},
    {text: 'Create an app',key:'4'},
    {text: 'Wow Chocolate',key:'5'},
  ])

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return  prevtodos.filter(todos => todos.key !== key);
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevtodos) => { 
        return [{ text: text, key: Math.random().toString() }, ...prevtodos];
      });
     }
    else{
      Alert.alert('OOPS!','Todos must be over 3 chars long',
      [{text:'understood', onPress: () => console.log('alert Closed')}
    ]);
    }

  }

  return (
    <TouchableWithoutFeedback
      onPress={() =>{
        Keyboard.dismiss();
         console.log('dismissed keyboard');
       }
        }
    >
        <View style={styles.container}>
          <Header/>
            <View style={styles.content}>
              <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                    data={todos}
                    renderItem={({item}) =>
                    <TodoItem items={item} pressHandler={pressHandler}/>
                    }
                    />
                </View>
            </View>
        </View>
        {/* <SandBox/> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    backgroundColor: '#fff',
    padding: 40,
    flex: 1,
  },
  list:{
    backgroundColor: '#fff',
    color: '#000',
    marginTop: 20,
    // backgroundColor:'skyblue',
    borderRadius:16,
    flex: 1,
  }

});
