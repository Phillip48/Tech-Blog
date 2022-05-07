const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const homeData = await Post.findAll();
        res.status(200).json(homeData);
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
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(homeData);
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