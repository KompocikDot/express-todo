const express = require("express");
const router = express.Router();
const itemModel = require("../models/item");

router.get("/", async (_, res) => {
    let todos = await itemModel.find({});
    res.render('index', {todos});
});

router.get("/remove/:id", async (req, res) => {
    await itemModel.findByIdAndRemove(req.params.id);
    res.redirect("/");
});

router.post("/edit/:id", async (req, res) => {
    await itemModel.findByIdAndUpdate(req.params.id, {$set: {'thing_to_do': req.body.todo}});
    res.redirect("/");
});

router.post("/edit/", (_, res) => {
    res.redirect("/");
});

router.post("/", async (req, res) => {
    let newTodo = new itemModel({
        thing_to_do: req.body.todo,
    });

    await newTodo.save();
    res.redirect("/");
});

module.exports = router;