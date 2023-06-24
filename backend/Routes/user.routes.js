const express = require("express");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const { userModel } = require("../model/User.model");
const { LogoutModel } = require("../model/logout.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 3, async (err, hash) => {
      const NewUser = new userModel({ name, email, password: hash });
      try {
        await NewUser.save();
        res.status(201).send({ msg: "User registration successfull", NewUser });
      } catch (error) {
        if(error.code=="11000"){
            return res.status(401).send({ msg:`you are already registered with ${error.keyValue.email} please login` });

        }
        res.status(401).send({ msg:error });
      }
    });
  } catch (err) {
    res.status(401).send({ msg: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
//   try {
//     const user = await userModel.findOne({ email });
//     // if (!user) {
//     //   res.status(401).send({ msg: "register first" });
//     // }
//     bcrypt.compare(password, user.password, async (err, result) => {
//       if (err) {
//         return res.status(401).send({ error: "login failed" });
//       }
//       if (result) {
//         const token = jwt.sign({ userID: user._id }, process.env.SECRET, {
//           expiresIn: "1hr",
//         });
//         res.cookie("token", token, { maxAge: 24 * 60 * 60 });
//         res.status(201).send({ msg: "login succesfull", token });
//       }
//     });
//   } catch (err) {
//     res.status(401).send({ msg: "login failed xyz" });
//   }
 


  if(email&&password){

      try {
        const user = await userModel.findOne({ email });
        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user._id }, process.env.SECRET, {
                    expiresIn: "1hr",
                  });
                  res.cookie("token", token, { maxAge: 24 * 60 * 60 });
              
                  res.status(201).send({ msg: "login succesfull", token });
            } else {
                res.status(400).json({ msg: "Wrong Credentials" });
            }
          });
        } else {
           res.status(400).json({ msg: "User does  not exist" });
        }
      } catch (err) {
         res.status(400).json({ error: err.message });
      }
  }else{
    res.status(404).json({msg:`please enter-${!email?"email":"password"}`})
  }
});

userRouter.post("/logout", async (req, res) => {
  // const token=req.headers.authorization
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).send({ msg: "No token provided" });
  }
  try {
    const isTokenBlacklisted = await LogoutModel.findOne({ token });
    if (!isTokenBlacklisted) {
      // await logoutModel.create({ token });

      const TokenBlacklisted = new LogoutModel({ token });
      await TokenBlacklisted.save();

      res.clearCookie("token");
      res.status(200).send({ msg: "Logout successful", TokenBlacklisted });
    } else {
      return res.status(401).send({ msg: "Invalid token" });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});
module.exports = { userRouter };
