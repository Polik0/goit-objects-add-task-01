const cart = {
  products: [],
  add(product) {
    this.products.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === productName) {
        this.products.splice(i, 1);
        return;
      }
    }
  },
  clear() {
    this.products = [];
  },
  getAll() {
    return this.products;
  },
  // Additional task 1
  getTotalPrice() {
    let all = 0;
    for (let i = 0; i < this.products.length; i++) {
      const totalPrice = this.products[i].price * this.products[i].price;
      console.log(this.products[i].name + ": " + totalPrice);
      all += totalPrice;
    }
    console.log(`Ціна всіх продуктів разом: ${all}`);
  },
};

const apple = {
  name: "Яблуко",
  price: 9.99,
  quantity: 3,
};

const orange = {
  name: "Апельсин",
  price: 12,
  quantity: 1,
};

cart.add(apple);
cart.add(orange);
// Additional task 1 checking
console.table(cart.getAll());
cart.getTotalPrice();
cart.remove("Апельсин");
cart.clear();

console.log(cart.getAll());
