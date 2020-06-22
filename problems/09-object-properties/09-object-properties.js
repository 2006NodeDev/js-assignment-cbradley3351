/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function chocolate(brand, flavor, type) {
    this.brand = brand;
    this.flavor = flavor;
    this.type = type;
  }

  let choco = new chocolate('Nestle', 'Milk', 'Crispy');

  console.log(`${choco.brand}, ${choco.flavor}, ${choco.type}`);
