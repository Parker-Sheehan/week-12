const { validationResult } = require("express-validator");
const { post } = require("../routes/feed");
const { Post } = require("../util/models");

exports.getPosts = (req, res, next) => {
  Post.findAll()
    .then((posts) => {
      console.log(posts)

      res.status(200).json({
        post: [
          {
          _id: '1',
          title: 'First post',
          content: 'this is the first post',
          imageUrl: 'images/truck.jpg',
          creator: {
            name: 'parker'
          },
          createdAt: new Date()
          }
        ]
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const content = req.body.content;


  Post.create({ title, imageUrl, content })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully!",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// exports.getPost = (req, res, next) => {
//   const postId = req.params.postId;
//   console.log(postId);
//   Post.findByPk(postId)
//     .then((post) => {
//       if (!post) {
//         const error = new Error("Could not find post");
//         error.statusCode = 500;
//         throw error;
//       }
//       res.status(200).json({ message: "Post fetched", post: post });
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };
