import express from "express";
import passport from "passport";

const authRouter = express.Router();

// authRouter.get('/:id', );
// authRouter.post('/login', passport.authenticate("local",{},));

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

export default authRouter;