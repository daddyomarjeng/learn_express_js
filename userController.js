const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ id: "1", name: "DOJ" });
});
router.post("/", (req, res) => {
  res.status(201).json(req.body);
});
router.put("/:id", (req, res) => {
  res.status(200).json(`user with id ${req.params.id} updated successfully`);
});
router.delete("/:id", (req, res) => {
  res.status(200).json(`user with id ${req.params.id} deleted successfully`);
});

module.exports = router;
