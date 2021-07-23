const mockRestaurants = [
  { name: "Restaurante A", rating: 4.5, deliveryTime: 45, id: 1 },
  { name: "Restaurante B", rating: 4.7, deliveryTime: 35, id: 2 },
  { name: "Restaurante C", rating: 4.2, deliveryTime: 25, id: 3 },
  { name: "Restaurante D", rating: 4.3, deliveryTime: 40, id: 4 },
];

const getRestaurantes = () => {
  return mockRestaurants;
};

module.exports = {
  getRestaurantes: getRestaurantes,
};
