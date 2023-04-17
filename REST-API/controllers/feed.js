const { validationResult } = require("express-validator");
const { Post } = require("../util/models");

exports.getPosts = (req, res, next) => {
    Post.findAll()
        .then(posts => {
            res
            .status(200)
            .json({message: 'Featched posts success', posts:posts})
        })
        .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          });
  
};

exports.createPost = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect");
    error.status = 422;
    throw error;
  }

  console.log(req.body);

  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const content = req.body.content;

  try {
    Post.create({ title, imageUrl, content });
    res.status(201).json({
      message: "Post created successfully!",
      post: {
        title: title,
        content: content,
        creator: { name: "Parker" },
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPost = async (req, res, next) => {
  const postId = req.params.postId
  console.log(postId)
  Post.findByPk(postId)
    .then(post => {
        console.log(post)
        if(!post){
            const error = new Error("Couldn't find post")
            error.statusCode = 404;
            throw error
        }

        res.status(200).json({message: 'Post fetch', post:post})
    })
    .catch(err => {console.log(err)})
};
