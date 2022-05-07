const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        const homeData = await Post.findAll();
        res.status(200).json(homeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/new", withAuth, async (req, res) => {
    // for showing new posts to the user
    try {
        const homeData = await Post.findAll();
        res.status(200).json(homeData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
    try {
        const homeData = await Post.findByPk(req.params.id, {});

        if (!homeData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(homeData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;