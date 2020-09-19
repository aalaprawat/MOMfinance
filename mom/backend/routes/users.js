var express = require('express');
var router = express.Router();
var user = require('../models/userschema');
const cors = require ('cors')
router.use(cors())
router.route('/')
  .get(function (req, res ,next) {
    user.find({})
    .then((users)=>{
      res.statusCode=200;
      res.json(users)
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
  })
  .post(function (req, res) {
    user.create({name:req.body.name})
    .then((user)=>{
        res.json(user);
        res.statusCode=200
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
  })


  router.route('/:userid')
  .get(function (req, res ,next) {
    user.findById(req.params.userid)
    .then((user)=>{
      res.statusCode=200;
      res.json(user)
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
  })
  .post(function (req, res) {
    user.findById(req.params.userid)
    .then((user)=>{
      user.amounts.push(req.body)
      user.save()
      .then((user)=>{
        res.statusCode=200
        res.json(user)
      })
      .catch((err)=>{
        res.statusCode=500;
        console.log(err)
      })
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
  })
  

router.route('/:userid/amounts')
  .get(function (req, res ,next) {
    user.findById(req.params.userid)
    .then((user)=>{
      res.statusCode=200;
      res.json(user.amounts)
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
})
router.route('/:userid/amounts/:amountid')
  .get(function (req, res ,next) {
    user.findById(req.params.userid)
    .then((user)=>
    {
      res.statusCode=200
      res.json(user.amounts.id(req.params.amountid))
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
  })
  .delete(function (req, res ,next) {
    user.findById(req.params.userid)
    .then((user)=>
    {
      id1=user.amounts.id(req.params.amountid)
      id2=req.params.amountid
      if(id1.equals(id2))
      {
        user.amounts.id(req.params.amountid).remove();
        user.save()    
        .then((user)=>{
            res.statusCode=200
            res.json(user)
        })
      }
    })
    .catch((err)=>{
      res.statusCode=500;
      console.log(err)
    })
})


module.exports = router;
