// db/schema.js
const mongoose = require("mongoose");

// ✅ Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/lumen_simulation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Example: User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // cannot be empty
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true       // no duplicate emails
  },
  age: {
    type: Number,
    min: 18
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ Example: Project Schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"       // Reference to User collection
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ Create Models
const User = mongoose.model("User", userSchema);
const Project = mongoose.model("Project", projectSchema);

// ✅ Export models
module.exports = { User, Project };
