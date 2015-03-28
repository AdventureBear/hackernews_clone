var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
  function(username,password,done){
    User.findOne({username:username},function(err,user){
      //error?
      if(err){return done(err);}
      //user exists?
      if(!user){return done(null,false,{message:'Incorrect Username.'});}
      //password correct?
      if(!user.validPassword(password)){return done(null,false,{message:"Incorrect Password!"});}

      //proceed
      return done(null,user);
    });
  }
));

