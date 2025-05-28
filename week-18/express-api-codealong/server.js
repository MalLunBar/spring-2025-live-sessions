import express from "express";
import cors from "cors";
import flowerData from "./data/flowers.json";
import ListEndpoints from "express-list-endpoints";
// Importing the flowers data
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  const endpoints = ListEndpoints(app)
  res.json({
    message: "Welcome to the flower API",
    endpoints: endpoints
  })
});

//Endpoint for getting all flowers 
app.get("/flowers", (req, res) => {

  const { color, botanicalFamily, symbolism } = req.query
  //new array 
  let filteredFlowers = flowerData

  //make toLowerCase only for the comparison. It Doesnt actually change it to lower case in the database
  if (color) {
    filteredFlowers = filteredFlowers.filter(flower => flower.color.toLowerCase() === color.toLowerCase())
  }
  //Find symbolism depending on word in array
  if (symbolism) {
    filteredFlowers = filteredFlowers.filter((flower) => {
      const symFlower = flower.symbolism.map(item => item.toLowerCase())
      if (symFlower.includes(symbolism.toLowerCase())) {
        return flower
      }
    })
  }


  res.json(filteredFlowers)
})
//Endpoint for getting one flower
app.get("/flowers/:id", (req, res) => {


  const flower = flowerData.find(flower => flower.id === +req.params.id)

  if (!flower) {
    return res.status(404).json({ error: "flower not found" })
  }
  res.json(flower)
})
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});