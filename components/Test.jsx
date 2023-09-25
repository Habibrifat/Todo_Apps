import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default Test = () => {
    const [name ,setName] = useState("Fruits");
    const [group ,setGroup] = useState([
      {Items: "Apples", color:"Green"},
      {Items: "Mango", color:"Yellow"},
      {Items: "Guava", color:"Green-Yellow"},
      {Items: "Pine Apple", color:"Green-Yellow"},
      {Items: "Orange", color:"Orange"},
      {Items: "Cherry", color:"Red"},
      {Items: "Banana", color:"Yellow"},
    ]);
  
  
    const handleChange = () => {
        setName("Orange");
        setGroup({
          Items: "Cake",
          color: "Vanila"
        });
    }
    const presshandler = (id) =>{
      console.log("Press", id);
      setGroup((prevGroup)=>{
        return prevGroup.filter((group)=> group.id != id);
      });
    }
    return ( 
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Rifat !</Text>
        <StatusBar style="auto" />
        <View style={styles}>
          <Text style={styles.bold}>WOW</Text>
        </View>
        <View style={styles.bold}>
          <Text> My Garden Crops {name} </Text>
          <Text>Another Item is {group.color} {group.Items} </Text>
        </View>
        <View style={styles.button}>
          <Button title='hi Click ME !' onPress={handleChange}/>
        </View>
        {/* <ScrollView>
          { group.map(items =>(
          <View>
              <Text style={styles.items}>{items.Items} - {items.color} </Text>
          </View>
          ))}
        </ScrollView> */}
        <FlatList
        keyExtractor={(item) => item.Items}
        data={group}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={() => presshandler(item.Items)}>
              <Text style={styles.items}>{item.Items} - {item.color} </Text>
          </TouchableOpacity>
        )}
        />
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    bold:{
      fontWeight: 'bold',
      fontSize: 20,
      color: 'yellow',
    },
    button:{
      fontSize:30,
      marginTop:14,
    },
    items:{
      color: 'black',
      backgroundColor: '#FFC0CB',
      marginTop:20,
      padding: 30,
      fontSize:24
    }
  });