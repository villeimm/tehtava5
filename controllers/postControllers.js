const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.removePostById = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await Post.removeById(postId);

    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.putPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    const updatedData = req.body;

    let [post, _] = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await Post.updateById(postId, updatedData);

    let [updatedPost, __] = await Post.findById(postId);

    res.status(200).json({ post: updatedPost[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
