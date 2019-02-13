var Skill = require('../models/skills');

module.exports = {
    index,//getAll()
    show,//getOne()
    new: newSkill,
    create,
    delete: deleteSkill,
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id),
        skillsNum: parseInt(req.params.id) + 1
    })
}

function newSkill(req, res) {
    res.render('skills/new');    
}

function create(req, res) {
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}