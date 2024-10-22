import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [shoppingLists, setShoppingLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/shoppinglists')  // Troque pela URL correta do backend
      .then(response => setShoppingLists(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <Button title="Adicionar Nova Lista" onPress={() => navigation.navigate('ShoppingListForm')} />
      
      <FlatList
        data={shoppingLists}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingListForm', { id: item._id })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
