const express = require("express");
const router = express.Router();
const {
  getLogoutView,
  killApplication,
} = require("../controllers/logoutController");

router.get("/", getLogoutView);
router.post("/kill", killApplication);

module.exports = router;
