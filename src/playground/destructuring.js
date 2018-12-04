// OBJECT DESTRUCTURING

const person = {
    name: 'Zarek',
    age: 19,
    location: {
        city: 'Atlanta',
        temp: 50
    }
};

const { name: firstName = 'Anonymous' , age } = person; // destructuring statement, default values
console.log(`${person.name} is ${person.age}`)

const { city , temp: temperature } = person.location; // You can rename properties
if ( city && temperature ) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {publisher: publisherName = 'Self Published'} = book.publisher

console.log(publisherName);

// object destructuring allows us to set local variables and set them to new values with new defaults etc


// ARRAY DESTRUCTURING 

const address = ['214 Daisy Cir', 'Atlanta', 'Georgia', '30252']
const [, city, state = 'New York'] = address; // Commas are used to skip items in the array
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price] = item

console.log(`A medium ${coffee} cost ${price}`)