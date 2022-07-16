const router = require("express").Router();
const { Category, Product } = require("../../models");
const db = require("../../config/connection");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log("\nGET /api/categories  triggered\n");
  Category.findAll({
    include: [Product],
  })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // TODO:  be sure to include its associated Products
  console.log("\nGET /api/categories/:id  triggered\n");
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.post("/", (req, res) => {
  // create a new category
  console.log("\nPOST /api/categories/  triggered\n");
  Category.create({ category_name: req.body.category_name })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  console.log("\nPUT /api/categories/:id  triggered\n");
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  console.log("DELETE /api/categories/:id  triggered");
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

module.exports = router;
