const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")

//Item model to make queries
const Item = require("../../models/Item");

// @route GET api/items
// @desc GET All Items
// @access Public
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a new Item
// @access Private / Protected
router.post("/", auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
           .then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Private / Protected
router.delete("/:id", auth, (req, res) => {
    Item.findById(req.params.id)
           .then(item => item.remove().then(() => res.json({ success: true})))
           .catch(err => res.status(404).json({ success: false}));
});

// @route PUT api/items/:id
// @desc Update an Item
// @access Public
router.put("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.update({ $set: { name: req.body.name } }).then(()=> res.json( {success: true})))
        .catch(err => res.status(404).json({ success: false}));
  });

module.exports = router;