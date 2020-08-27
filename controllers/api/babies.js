const Baby = require('../../models/baby')


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

function index(req, res){
// find baby
// render baby
Baby.find({}, (err, babies) => {
    res.status(200).json(babies)
})
}

function show(req, res){
    Baby.findById(req.params.id)
    .then((baby) =>{
        res.status(200).json(baby)
    })
}

function create(req, res){
    //create new object in req.body
    Baby.create(req.body)
    .then((baby)=>{
        res.status(201).json(baby)
    })
}

function deleteOne(req, res){
    Baby.findByIdAndDelete(req.params.id)
    .then((baby)=>{
        res.status(200).json(baby)
    })
}

function update(req, res){
    Baby.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((baby)=>{
        res.status(200).json(baby)
    })
}