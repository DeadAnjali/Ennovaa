const mongoose = require('mongoose');

// Define schema for a design file
const DesignFileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Add more fields as needed
});

// Create a model for a design file
const DesignFile = mongoose.model('DesignFile', DesignFileSchema);

module.exports = DesignFile;
