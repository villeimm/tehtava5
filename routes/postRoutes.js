const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route get && post - /posts-
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router
  .route("/:id")
  .get(postControllers.getPostById)
  .delete(postControllers.removePostById)
  .put(postControllers.putPostById);

module.exports = router;
