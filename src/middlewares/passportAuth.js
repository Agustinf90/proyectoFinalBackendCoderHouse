import passport from 'passport';
import LocalStrategy from 'passport-local';

const user = {username: "pipi",
              password: 123}

passport.use(new LocalStrategy(function verify(username, password, cb){
    //todo: search for user in db//
    function verifyUserInDb(username, password){   
    if (!user) {
        return cb(null, false, {message: "incorrect user"})
    } 
        return cb(null, user);
    } 
}))

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, {username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

