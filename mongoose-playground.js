const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

// We call a method model (firts argument -> name of the collection, second argument -> schema)
// const Pizza = mongoose.model('Pizza', {title: String, price: Number});

const pizzaSchema = new Schema({
    title: String,
    price: Number
});


const Pizza = mongoose.model('Pizza', pizzaSchema);

mongoose
  .connect('mongodb://localhost/ironic-pizzas-db')
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    const detailsOne = {
        title: 'pizza margherita', 
        price: 8
    }

   
    return Pizza.create(detailsOne)   
})
.then( pizzaFromDB => {
    console.log('pizza created')
    console.log(pizzaFromDB);

    const arrayOfPizzas = [
        {title: "pizza carbonara", price: 10},
        {title: "pizza funghi", price: 12}
    ]

    return Pizza.insertMany(arrayOfPizzas);
})
.then(pizzasCreatedInDB => {
    console.log('your two pizzas were created"')
    console.log(pizzasCreatedInDB)

    

    // DISPLaY THE PIZZAS THAT WE HAVE IN OUR DB --> Model.find()
    return Pizza.find();
}) 
.then(displayAll => {
    console.log('your pizzas has been displayed')
    console.log(displayAll)

})
.catch(err => console.error('Error interacting with the database', err));

