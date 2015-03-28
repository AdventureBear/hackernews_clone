var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET posts */
router.get('/posts',function(req,res,next){
  Post.find(function(err,posts){
    if(err) {return next(err);}
    res.json(posts);
  })
});

router.post('/posts',function(req,res,next){
  var post = new Post(req.body);

  post.save(function(err,post){
    if(err){return next(err);}

    res.json(post);
  })
});

router.get('/comments',function(req,res,next){
  if(err) {return next(err);}
  res.json(comments);
});

module.exports = router;