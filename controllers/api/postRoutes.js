const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // Create a post
    try {
        const newProject = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
    Post.update(
        {
          // All the fields you can update and the data attached to the request body.
        //   category_name: req.body.category_name
        },
        {
          // Gets a book based on the book_id given in the request parameters
          where: {
            id: req.params.id,
          },
        }
      )
        .then((updatedPost) => {
          res.json(updatedPost);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
    try {
        const projectData = await Post.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!projectData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
    
        res.status(200).json(projectData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;