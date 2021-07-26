const mockRestaurants = [
  { name: "Restaurante A", rating: 4.5, deliveryTime: 45, id: 1 },
  { name: "Restaurante B", rating: 4.7, deliveryTime: 35, id: 2 },
];

const getRestaurantes = (req, res) => {
  //return mockRestaurants;
  res.json(mockRestaurants);
};

module.exports = {
  getRestaurantes: getRestaurantes,
};
