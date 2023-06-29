const exchangeRate = 80;

function convertToRupees(inventory) {
  const convertedInventory = inventory.map((item) => {
    const convertedPrice = item.price * exchangeRate;
    return { ...item, price: convertedPrice };
  });

  return convertedInventory;
}

// Example usage
const storeInventory = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 }
];

const convertedInventory = convertToRupees(storeInventory);
console.log(convertedInventory);
