const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        // Get all projects and JOIN with user data
        const homeData = await Post.findAll({});
    
        // Serialize data so the template can read it
        const posts = homeData.map((post) => post.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('posts', { 
            posts, 
          // logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const homeData = await Post.findByPk(req.params.id, {
            include: [{ model: Comment }]
            // include: [{ model: Tag, through: Category, as: 'category_tag' }]
        });

        if (!homeData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        const project = projectData.get({ plain: true });

        res.render('project', {
          ...project,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/login", (req, res) => {
    // login
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;