const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// usado para criar as tabelas
const Product = require('./models/Product');
const ShoppingList = require('./models/ShoppingList');

const productRoutes = require('./routes/productRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://nepper:Minh%40Mulher19@cluster0.fkiw2ij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Criar as tabelas na base de dados

//async function createTables() {

//  try {
      //await Product.createCollection();
      //await ShoppingList.createCollection();

      //console.log('Tabelas criadas com sucesso!');

  //} catch (err) {
    //  console.log('Erro ao criar as tabelas:', err);
  //}

//}

//createTables();

// Integrar as rotas

app.use('/api/products', productRoutes);
app.use('/api/shopping-lists', shoppingListRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

