const mongoose = require('mongoose');
const { Schema } = mongoose;

const freelancerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ranking: {
      type: Number
    },
    projectsCompleted: {
      type: Number
    },
    registeredSince: {
      type: Date,
      default: Date.now
    },
    professionalTitle: {
      type: String,
      required: true
    },
    aboutMe: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

const Freelancer = mongoose.model('Freelancer', freelancerSchema, 'freelancer');

module.exports = {
  Freelancer,
  freelancerSchema
};