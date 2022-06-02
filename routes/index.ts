import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Getou");
});

router.post("/", function (req, res, next) {
  res.send("Postou");
});

router.put("/", function (req, res, next) {
  res.send("Putou");
});

router.delete("/", function (req, res, next) {
  res.send("Deletou");
});

module.exports = router;
