//const product = {
  name: "Socks",
  price: 5.99,
  description: "A pair of warm, fuzzy socks",
  imgUrl:
    "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
};

function createProductTile(prod) {
  return `
  <figure>
      <img src="${product.imgUrl}" alt="${product.name}">
      <figcaption>
        <h2>${product.name}</h2>
        <small>${product.price}</small>
        <p>${product.description}</p>
      </figcaption>
    </figure>
  `;
}

const productTile = createProductTile(product);
console.log(productTile);







SArrays are collections that are indexed by implicitly generated numbers
// The first item in the array is at index 0, the second at index 1, and so on
// Arrays are zero-indexed, meaning the first item is at index 0
const nums = ["socks", "shoes", "pants", "shirt", "hat"];

const firstItem = nums[0];
const secondItem = nums[1];
const thirdItem = nums[2];

console.log(firstItem); // socks
console.log(secondItem); // shoes
console.log(thirdItem); // pants

const catalog = [];
const products = [
  {
    name: "Socks",
    price: 5.99,
    description: "A pair of warm, fuzzy socks",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Pants",
    price: 10.99,
    description: "A nice pair of pants",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Shoes",
    price: 25.99,
    description: "A nice pair of shoes",
    imgUrl:
      "https://images.unsplash.com/photo-1556740732-3f8f0a6c7b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
];
