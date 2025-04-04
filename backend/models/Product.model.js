const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    enum: ["New", "Like New", "Good", "Fair"],
    default: "New",
  },
  location: {
    type: String,
    required: true,
  },
  negotiable: {
    type: Boolean,
    default: false,
  },
  photos: [
    {
      url: String,
      public_id: String,
    },
  ],
  tags: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: false,
  },
  fullAddress: {
    type: String,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
