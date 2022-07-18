const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log("\nGET /api/tags  triggered\n");
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
        as: "product_tags",
      },
    ],
  })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log("\nGET /api/tags/:id  triggered\n");
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
        as: "product_tags",
      },
    ],
  })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  console.log("\nPOST /api/tags/  triggered\n");
  Tag.create({ tag_name: req.body.tag_name })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  console.log("\nPUT /api/tags/:id  triggered\n");
  Tag.update(
    {
      tag_name: req.body.tag_name,
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
  // delete on tag by its `id` value
  console.log("\nDELETE /api/tags/:id  triggered\n");
  Tag.destroy({ where: { id: req.params.id } })
    .then((dbData) => {
      return res.json(dbData);
    })
    .catch((error) => {
      return res.status(500).json(error.message);
    });
});

module.exports = router;
