function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }
  return value;
}



// 2   


function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

 
  return 0;
}




// 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



// 4

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}


// 5
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}


// 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}




// 7
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (let value of arr1) {
    let exists = false;
    for (let item of result) {
      if (item === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(value);
    }
  }

  for (let value of arr2) {
    let exists = false;
    for (let item of result) {
      if (item === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(value);
    }
  }

  return result;
}


// 8


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map(product => {
      const base = product.price * product.quantity;
      if (product.discount) {
        return base - (base * product.discount) / 100;
      }
      return base;
    })
    .reduce((sum, price) => sum + price, 0);
}

