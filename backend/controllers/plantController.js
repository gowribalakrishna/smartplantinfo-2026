let plants = [
  {
    id: "P101",
    englishName: "Mango",
    teluguName: "మామిడి",
    water: "2 times weekly",
    sunlight: "Full Sun",
    climate: "Hot",
  },
  {
    id: "P102",
    englishName: "Rose",
    teluguName: "రోజా",
    water: "Daily",
    sunlight: "Partial Sun",
    climate: "Moderate",
  },
];


// GET ALL PLANTS
exports.getPlants = (req, res) => {
  res.status(200).json(plants);
};


// GET SINGLE PLANT
exports.getSinglePlant = (
  req,
  res
) => {
  const plant = plants.find(
    (p) => p.id === req.params.id
  );

  if (!plant) {
    return res.status(404).json({
      message: "Plant not found",
    });
  }

  res.status(200).json(plant);
};


// ADD PLANT
exports.addPlant = (req, res) => {
  const {
    id,
    englishName,
    teluguName,
    water,
    sunlight,
    climate,
  } = req.body;

  const newPlant = {
    id,
    englishName,
    teluguName,
    water,
    sunlight,
    climate,
  };

  plants.push(newPlant);

  res.status(201).json({
    message: "Plant added successfully",
    plant: newPlant,
  });
};


// UPDATE PLANT
exports.updatePlant = (
  req,
  res
) => {
  const plantIndex = plants.findIndex(
    (p) => p.id === req.params.id
  );

  if (plantIndex === -1) {
    return res.status(404).json({
      message: "Plant not found",
    });
  }

  plants[plantIndex] = {
    ...plants[plantIndex],
    ...req.body,
  };

  res.status(200).json({
    message:
      "Plant updated successfully",
    plant: plants[plantIndex],
  });
};


// DELETE PLANT
exports.deletePlant = (
  req,
  res
) => {
  const plant = plants.find(
    (p) => p.id === req.params.id
  );

  if (!plant) {
    return res.status(404).json({
      message: "Plant not found",
    });
  }

  plants = plants.filter(
    (p) => p.id !== req.params.id
  );

  res.status(200).json({
    message:
      "Plant deleted successfully",
  });
};