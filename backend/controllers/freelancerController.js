// const { default: mongoose } = require('mongoose');
const { Freelancer: FreelancerModel } = require('../models/freelancerModel');

const freelancerController = {
  create: async (req, res) => {
    try {
      const freelancer = {
        id: req.body.id,
        name: req.body.name,
        ranking: req.body.ranking,
        projectsCompleted: req.body.projectsCompleted,
        registeredSince: req.body.registeredSince,
        professionalTitle: req.body.professionalTitle,
        aboutMe: req.body.aboutMe,
        skills: req.body.skills,
      };

      // await mongoose.connect('mongodb://root:root@127.0.0.1:27017/freelancer_hub');

      const response = await FreelancerModel.create(freelancer);

      res.status(201).json({ response, msg: "Freelancer cadastrado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = freelancerController;

