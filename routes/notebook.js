const router = require("express").Router();
const notebookModel = require("../models/notebook");

// Post api
router.post("/add-post", async (req, res) => {
  try {
    const addPost = await notebookModel.create(req.body);
    res.status(200).json(addPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All api
router.get("/get-all", async (req, res) => {
  try {
    const getAllPost = await notebookModel.find();
    res.status(200).json(getAllPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get Single post
router.get("/:id", async (req, res) => {
  try {
    const getPost = await notebookModel.findById(req.params.id);
    res.status(200).json(getPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const DelPost = await notebookModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    const getOne = await notebookModel.findById(req.params.id);

    const updatePost = await notebookModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
