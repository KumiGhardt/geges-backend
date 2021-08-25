// const express = require('express');


// const morgan = require("morgan");
// const uuid = require('uuid');
// const bodyParser = require('body-parser');




// const app = express();
// //morgan middleware for logging requests
// app.use(morgan('common'));
// app.use(bodyParser.json());
// app.use("/documentation", express.static("public"));
// //serving static files
// app.use(express.static("public"));




// let product = [
//     {
//         category: "sweet",
//         title: "Birthday cake" ,
//         image: "angelcake",
//         description: "This a vanilla angel cake",
//         price: 50
//     },
    
//     {
//         category: "sweet",
//         title: "Cupcakes",
//         image: "Cupcakes",
//         description: "These are cupcakes",
//         price: 45
//     },
//     {
//         category: "sweet",
//         title: "Raspberry Cake",
//         image: "birthdaycake",
//         description: "This is a delicious raspberrycake",
//         price: 65,
//     },
//     {
//         category: "sweet",
//         title: "Cookies",
//         image: "Cookies",
//         description: "These are vanilla cookies",
//         price: 12.99
//     },
//     {
//         category: "sweet",
//         title: "Cupcake Messages",
//         image: "Gifts",
//         description: "These are cupcakes arranged as a bouquet of roses",
//         price: 165
//     },
//     {
//         category: "savory",
//         title: "Garlic Bread",
//         image: "Garlicbread",
//         description: "This is garlicbread with cheese",
//         price: 75
//     },
//     {
//         category: "savory",
//         title: "Pizza",
//         image: "Pizza",
//         description: "This salami pizza",
//         price: 69
//     },
//     {
//         category: "craving",
//         title: "Raspberry cheesecake slices" ,
//         image: "raspberrycheesecake",
//         description: "This is a raspberry and cheesecake slice",
//         price: 10
//     }
// ];


// //GET REQUESTS
// //get requests home
// app.get('/', (req, res) => {
//     res.send('Welcome to Gege\'s Confectionary')
// });

// //get request for all products
// app.get('/product', (req, res) => {
//     res.json(product)
// });

// //get one product by title
// app.get('/product/:title', (req, res) => {
//     res.json(product.find( (product) => {
//         { return product.title === req.params.title }
//     }));
// });

// //get request for all products by category
// app.get('/product/:category/:category', (req, res) => {
//     res.json(product.filter( (product) => {
//         { return product.category === req.params.category }
//     }));
// });


// //get request documentation
// app.get('/documentation', (req, res) => {
//     res.sendFile('public/documentation.html', {root: __dirname})
// });


// app.get('/secreturl', (req, res) => {
//     res.send('This is a secret url with top secret content.');
// });



// //POST REQUESTS
// //post to add to inventory
// app.post('/product', (req, res) => {
//     let newProduct = req.body;
//     if (!newProduct.title) {
//         const message = "missing 'title' in request body";
//         res.status(400).send(message);
//     } else {
//         newProduct.id = uuid.v4();
//         product.push(newProduct);
//         res.status(201).send(newProduct)
//     }
// });


// //PUT requests
// //update a product to inventory by title
// app.put('/product:title', (req, res) => {
//     let product = product.findOneAndUpdate( (product) =>{
//         {return product.title === req.params.title}
//     });
//     if (product) {
//         product.title[req.params.title] = parseInt(req.params.title);
//         res.status(201).send('Product' +  req.params.title + req.params.description + req.params.price);
//     } else {
//         res.status(404).send('Product with name' + req.params.title + 'not found')
//     }
// });

// //update a product to inventory by description
// app.put('/product/:description', (req, res) => {
//     let product = product.find( (product) =>{
//         {return product.description === req.params.description}
//     });
//     if (product) {
//         product.title[req.params.description] = parseInt(req.params.description);
//         res.status(201).send('Product' +  req.params.description + req.params.description + req.params.price);
//     } else {
//         res.status(404).send('Product with description' + req.params.description + 'not found')
//     }
// });

// //update a product by price
// app.put('/product/:price', (req, res) => {
//     let product = product.find( (product) =>{
//         {return product.price === req.params.price}
//     });
//     if (product) {
//         product.title[req.params.price] = parseInt(req.params.tprice);
//         res.status(201).send('Product' +  req.params.title + req.params.description + req.params.price);
//     } else {
//         res.status(404).send('Product with name' + req.params.price + 'not found')
//     }
// });


// //DELETE requests
// //delete a product by name
// app.delete('/product/:title', (req, res) => {
//     let product = product.findOneAndRemove((product) => { return product.id === req.params.id });
  
//     if (product) {
//       product = product.filter((obj) => { return obj.id !== req.params.id });
//       res.status(201).send('Product ' + req.params.id + ' was deleted.');
//     }
//   });
  


// //error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// //listen for requests
// app.listen(8080, () => {
//     console.log('Your app is listening on port 800');
// });


