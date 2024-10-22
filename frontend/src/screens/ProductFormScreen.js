import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function ProductFormScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [image, setImage] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const handleSubmit = () => {
    const product = { name, manufacturer, image, unitPrice };

    axios.post('http://localhost:3000/products', product)  // Troque pela URL correta do backend
      .then(response => {
        navigation.goBack();
      })
      .catch(error => console.log(error));
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Fabricante" value={manufacturer} onChangeText={setManufacturer} />
      <TextInput placeholder="Imagem (URL)" value={image} onChangeText={setImage} />
      <TextInput placeholder="Valor Unitário" value={unitPrice} onChangeText={setUnitPrice} keyboardType="numeric" />
      
      <Button title="Salvar Produto" onPress={handleSubmit} />
    </View>
  );
}
