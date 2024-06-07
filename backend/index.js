
let port = process.env.PORT || 4000
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const {config} = require("./secret")
app.use(express.json());
app.use(cors());



// Database Connection with MongoDB
mongoose.connect(
  `mongodb+srv://${config.userDb}:${config.passDb}@cluster0.svgcotn.mongodb.net/e-commerece`
);

// API creation
app.get("/", (req, res) => {
  res.send("Express app in running good ");
});

// Image Storage Enging

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  }
});

const upload = multer({ storage: storage });

// Creating Upload endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url:`http://localhost:4000/images/${req.file.filename}`
  });
});

// Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  new_price: {
    type: Number,
    require: true
  },
  old_price: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  avilable: {
    type: Boolean,
    default: true
  }
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.send({
    success: 1,
    name: req.body.name
  });
});

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all products found");
  res.json(products);
});

// Shema creating for user model

const Users = mongoose.model("Users", {
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  cartData: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

// Creating Endpoint for registering the user

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address"
    });
  }
  let cart = {};
  for (i = 0, i; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  });

  await user.save();

  const data = {
    user: {
      id: user.id
    }
  };

  const token = jwt.sign(data, config.tokenSecret);
  res.json({ success: true, token });
});

// Creating endpoint for user for user login

app.use("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      };
      const token = jwt.sign(data, config.tokenSecret);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong email id" });
  }
});

// Creating endpoint for newcollection data

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-3);
  console.log("NewCollection fetced");
  res.send(newCollection);
});

// Creating endpoint for popular in women section

app.get("/popularinpet", async (req, res) => {
  let products = await Product.find({ category: "pet" });
  let popular_in_pet = products.slice(0, 4);
  console.log("its works");
  res.send(popular_in_pet);
});


const fetchUser = async (req,res,next)=>{
  const token = req.header('auth-token');
  if(!token){
    res.status(401).send({errors:"please authenticate using valid token"});
  }
  else{
    try {
       const data = jwt.verify(token,config.tokenSecret);
       req.user = data.user;
       next();
    }
    catch(error){
      res.status(401).send({errors:"please authenticate using a valid token"})
    }
  }
}



app.post("/addtocart",fetchUser, async (req, res) => {
  console.log("Added",req.body.itemId)
  let userData = await Users.findOne({_id:req.user.id})
  userData.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Added")
});

// Cracting endpoint to remove from cartdata

app.post('/removfromcart',fetchUser, async(req,res)=>{

  console.log("removed",req.body.itemId)
  let userData = await Users.findOne({_id:req.user.id})
  if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
  
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Removed")
})


// Creating endpoint to get cartdata 
app.post('/getcart',fetchUser,async(req,res)=>{
  console.log('Get cart');
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData)
})


app.listen(port, error => {
  if (!error) {
    console.log("Server listening on port " + port);
  } else {
    console.log("Error : " + error);
  }
});
