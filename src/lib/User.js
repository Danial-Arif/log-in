import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // ✅ function reference, not Date.now()
  },
});

// Prevent model overwrite on hot reload
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
