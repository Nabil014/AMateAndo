const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const upload = require("../../../api/libs/storage");
const cloudinary = require("../../src/utils/cloudinary");

router.post("/", upload.single("picture"), async (req, res) => {
  const { name, price, stock, description, visibility } = req.body;
  console.log(req.body)
  const result = await cloudinary.uploader.upload(req.file.path);
  try {
    const productExist = await Product.findOne({ name });
    if (productExist) {
      return res.status(400).send("El producto ya existe");
    }
    const newProduct = new Product({
      name,
      price,
      stock,
      description,
      visibility,
      picture: result.secure_url,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(404).send("Faltan datos para agregar el producto");
  }
});

router.get("/", async (req, res) => {
  const productId = req.query.name;
  const products = await Product.find();
  try {
    if (productId) {
      Product.find({ name: productId }, (err, name) => {
        res.send(name);
      });
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
