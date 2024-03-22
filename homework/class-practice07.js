const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];
// Task 1 
console.log(users.filter( x => x.age > 30).length);
console.log(users.reduce((x, y) => y.address.city.toLowerCase() === "chicago" ? x+1: x, 0 ));
console.log(users.filter( x => x.address.state === 'IL').length);
console.log(users.reduce( (total, curEle) => curEle.address.state === 'IL' ? total + 1 : total, 0));
console.log(users.filter( email => email.email.includes('gmail')).length);
console.log(users.reduce((total, user) => user.email.includes('gmail') ? total+1 : total, 0));
console.log(users.reduce((sum, user) => user.age < 35 ? sum.concat(user.firstName): sum,[]));
console.log(users.filter( x => x.age < 35).map(user => user.firstName));
console.log(users.reduce( (totalAge, user) => totalAge + user.age, 0)/users.length)

// Task 2

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];
console.log(appleStore.reduce((max, prod) => max.price > prod.price ? max : prod).productName);
const mostExpensive = appleStore.reduce((max, prod) => max.price > prod.price ? max : prod);
console.log(mostExpensive.productName);
console.log(appleStore.reduce((min, prod) => min.price < prod.price ? min : prod).productName);
console.log(appleStore.reduce((most, cur) => most.quantity > cur.qty ? most : cur).productName);
console.log(appleStore.reduce((least, cur) => least.quantity < cur.quantity ? least: cur).productName);
console.log(appleStore.map( x => x.productName));

// Task 3 

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];
console.log(bookstore.reduce((lowest, book) => lowest.price < book.price ? lowest : book).title);
console.log(bookstore.reduce((highest, book) => highest.price > book.price ? highest : book).title);
console.log(bookstore.filter( book => book.genre.toLowerCase() === 'classic').map( x => x.title));
console.log(bookstore.reduce((title, book) => {
    if(book.genre === 'Classic') title.push(book.title);
    return title;
}, []))

// Task 4 

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

console.log(shoppingCart.items.reduce((x, y) => x + (y.price*y.quantity), 0));
console.log(shoppingCart.items.map( x => x.specifications.brand));
console.log(shoppingCart.items.map( item => `${item.productName}, ${item.quantity}`), 'Thanks for shopping');
const ar1 = shoppingCart.items.map( item => `${item.productName}, ${item.quantity}`)
console.log(ar1)
