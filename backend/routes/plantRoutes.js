const express = require("express");

const router = express.Router();

const {
  getPlants,
  getSinglePlant,
  addPlant,
  updatePlant,
  deletePlant,
} = require("../controllers/plantController");

router.get("/", getPlants);

router.get("/:id", getSinglePlant);

router.post("/", addPlant);

router.put("/:id", updatePlant);

router.delete("/:id", deletePlant);

module.exports = router;