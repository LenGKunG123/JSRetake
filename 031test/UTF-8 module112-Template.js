//ID : 65130500031 Name : Nateetarn Likitwiwatphong
class Order {
  constructor(orderId, customerName) {
    this.orderId = orderId;
    this.property = customerName;
    this.items = [];
  }
  addItem(item) {
    if (
      item === null ||
      item === undefined ||
      item.name === null ||
      item.price <= 0 ||
      item.quantity <= 0
    ) {
      return -1;
    }
    const newItem = item;
    this.items.push(newItem);
    return newItem;
  }
  removeItem(itemName) {
    const lowerItemName = itemName.toLowerCase();
    const existingItem = this.items.find(
      (item) => item.name.toLowerCase() === lowerItemName
    );
    const itemIndex = this.items.findIndex(
      (item) => item.name.toLowerCase() === lowerItemName
    );
    if (existingItem) return undefined;
    const removeItem = this.items.splice(itemIndex, 1)[0];
    return removeItem;
  }
  calculateTotal() {
    const totalPrice = this.items.forEach((item) => item.price * item.quantity);
    return totalPrice;
  }
  getDiscountedTotal(discountPercentage) {
    if (discountPercentage <= 0 || discountPercentage > 100) {
      return "invalid discount percentage";
    }
    const persentResult = this.calculateTotal * discountPercentage;
    const priceAfterDiscount = (this.calculateTotal -= persentResult);
    return priceAfterDiscount;
  }
  findItemByName(itemName) {
    if (this.items.find((item) => item.name === itemName)) {
      return this.items.find((item) => item.name === itemName);
    } else {
      return null;
    }
  }
  sortItemsByPrice(sortingOrder) {
    const lowerSortingOrder = sortingOrder.toLowerCase();
    if (
      lowerSortingOrder !== "ascending" ||
      lowerSortingOrder !== "descending"
    ) {
      return [];
    }
    if (lowerSortingOrder === "ascending") {
      const ascendingSorted = this.items.sort((a, b) => {
        a.price - b.price;
      });
      return ascendingSorted;
    }
    if (lowerSortingOrder === "descending") {
      const descendingSorted = this.items.sort((a, b) => {
        b.price - a.price;
      });
      return descendingSorted;
    }
  }
  isItem(Item) {
    if (
      Item === null ||
      Item === undefined ||
      Item.name === null ||
      Item.price <= 0 ||
      Item.quantity <= 0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
let myOrder = new Order(1, "John Wick");

console.log(
  "add item----------------------------------------------------------------"
);
//add item
console.log(myOrder.addItem({ name: "Laptop", price: 1000, quantity: 1 })); // Adds Laptop and return this item
console.log(myOrder.addItem({ name: "Keyboard", price: 100, quantity: 2 })); // Adds Keyboard and return this item
console.log(myOrder.addItem({ name: "Mouse", price: 25, quantity: 3 })); // Adds Mouse and return this item
console.log(myOrder.addItem({ name: "", price: 100, quantity: 1 })); // Empty name, should not add and return -1
console.log(myOrder.addItem({ name: "Headphones", price: -50, quantity: 1 })); // Negative price, should not add and return -1

console.log(
  "remove item----------------------------------------------------------------"
);
//remove item
myOrder.removeItem("Laptop"); // Removes Laptop if it exists
console.log(myOrder.items);

myOrder.removeItem("Keyboard"); // Removes Keyboard if it exists
console.log(myOrder.items);

myOrder.removeItem("NonExistentItem"); // Tries to remove a non-existent item
console.log(myOrder.items);

myOrder.removeItem(""); // Tries to remove an item with an empty name
console.log(myOrder.items);

myOrder.removeItem("Mouse"); // Removes Mouse if it exists
console.log(myOrder.items);

console.log(
  "calculateTotal----------------------------------------------------------------"
);
//calculateTotal
console.log(myOrder.calculateTotal());

console.log(
  "getDiscountedTotal----------------------------------------------------------------"
);
//getDiscountedTotal
console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount if total price is 100 will return 90
console.log(myOrder.getDiscountedTotal(0)); // No discount applied (0%) return “invalid discount percentage”
console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount if total price is 100 will return 0
console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage, should not apply return “invalid discount percentage”

console.log(
  "findItemByName----------------------------------------------------------------"
);
//findItemByName
console.log(myOrder.findItemByName("Laptop")); // Finds Laptop if it exists
console.log(myOrder.findItemByName("Keyboard")); // Finds Keyboard if it exists
console.log(myOrder.findItemByName("NonExistentItem")); // Tries to find a non-existent item return null
console.log(myOrder.findItemByName("")); // Tries to find an item with an empty name return null

console.log(
  "sortItemsByPrice----------------------------------------------------------------"
);
//sortItemsByPrice

console.log(myOrder.sortItemsByPrice("ascending")); // return new array with ascending
console.log(myOrder.sortItemsByPrice("descending")); // return new array with descending
console.log(myOrder.sortItemsByPrice("nonexistentOrder")); // return empty array if invalid sorting order
myOrder.items = [];
console.log(myOrder.sortItemsByPrice("ascending")); // return empty array if items array is empty

console.log(
  "isItem----------------------------------------------------------------"
);
//isItem
console.log(myOrder.isItem({ name: "Pen", price: 3, quantity: 10 })); // valid item return true
console.log(myOrder.isItem({ name: "Paper", price: 5, quantity: 20 })); // valid item return true
console.log(myOrder.isItem(null)); // valid item return false
console.log(myOrder.isItem(undefined)); // valid item return false
console.log(myOrder.isItem({ price: 20, quantity: 1 })); // missing name return false
console.log(myOrder.isItem({ name: "Notebook", price: -10, quantity: 5 })); // negative price return false
console.log(myOrder.isItem({ name: "Notebook", price: 10, quantity: -5 })); // negative quantity return false
console.log(myOrder.isItem({ name: "", price: 15, quantity: 5 })); // empty name return false
