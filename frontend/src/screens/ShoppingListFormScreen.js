import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

export default function ShoppingListFormScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shoppingListItems, setShoppingListItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')  // Troque pela URL correta do backend
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleAddItem = () => {
    const product = products.find(p => p._id === selectedProduct);
    const totalPrice = product.unitPrice * quantity;
    setShoppingListItems([...shoppingListItems, { productId: selectedProduct, quantity, totalPrice }]);
  };

  const handleSubmit = () => {
    const shoppingList = { items: shoppingListItems };
    
    axios.post('http://localhost:3000/shoppinglists', shoppingList)
      .then(response => {
        navigation.goBack();
      })
      .catch(error => console.log(error));
  };

  return (
    <View>
      <TextInput placeholder="Quantidade" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      
      <Button title="Adicionar Item" onPress={handleAddItem} />
      
      <FlatList
        data={shoppingListItems}
        keyExtractor={item => item.productId}
        renderItem={({ item }) => (
          <Text>{item.productId} - {item.quantity} x {item.totalPrice}</Text>
        )}
      />

      <Button title="Salvar Lista de Compras" onPress={handleSubmit} />
    </View>
  );
}