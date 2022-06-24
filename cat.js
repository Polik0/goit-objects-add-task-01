const cat = {
  age: 5,
  name: "Harley",
  features: [],
  addFeature(feature) {
    cat.features.push(feature);
  },
};

cat.breed = "Висловухий";
cat.getFeatures = function () {
  return cat.features;
};

console.log(cat["breed"]);

// Мене звати Harley, мені 5 років
console.log(`Мене звати ${cat.name}, мені ${cat.age} років`);

console.log(cat.getFeatures());
cat.addFeature("грубий");
console.log(cat.getFeatures());
