const bcrypt = require('bcryptjs');
const User = require("../models/user.model");

const signupUser = async (req, res) => {
  try{
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if(password !== confirmPassword){
      return res.status(400).json({error: "Passwords doesn't match"});
    }

    const user = await User.findOne({username});

    if(user){
      return res.status(400).json({error: "Username already exists"});
    }

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male"? boyProfilePic : girlProfilePic,
    });

    if(newUser){
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

  } catch(error){
    console.log("Error in signup controller", error.message);
    res.status(500).json({error: "Internal Server Error" });
  }
  res.send("Signup Route");
};

const loginUser = (req, res) => {
  res.send("Login Route");
};

const logoutUser = (req, res) => {
  res.send("Logout Route");
};

module.exports = { signupUser, loginUser, logoutUser };