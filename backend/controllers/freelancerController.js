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
        skills: req.body.skills
      };

      const response = await FreelancerModel.create(freelancer);

      res.status(201).json({ response, message: 'Cadastro efetuado com sucesso!' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },      

  getAll: async (req, res) => {
    try {
      const freelancer = await FreelancerModel.find();
      res.json(freelancer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const freelancer = await FreelancerModel.findById(id);

      if (!freelancer) {
        res.status(404).json({ message: 'Freelancer não encontrado.' });
        return;
      }

      res.json(freelancer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const freelancer = {
        id: req.body.id,
        name: req.body.name, 
        ranking: req.body.ranking,
        projectsCompleted: req.body.projectsCompleted,
        registeredSince: req.body.registeredSince,
        professionalTitle: req.body.professionalTitle,
        aboutMe: req.body.aboutMe,
        skills: req.body.skills
      };

      const updatedFreelancer = await FreelancerModel.findByIdAndUpdate(id, freelancer);

      if (!updatedFreelancer) {
        res.status(404).json({ message: 'Freelancer não encontrado.' });
        return;
      }

      res.status(200).json({ freelancer, message: 'Freelancer atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const freelancer = await FreelancerModel.findById(id);

      if (!freelancer) {
        res.status(404).json({ message: 'Freelancer não encontrado.' });
        return;
      }

      const deletedFreelancer = await FreelancerModel.findByIdAndDelete(id);

      res.status(200).json(`${deletedFreelancer.name} deletado com sucesso`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = freelancerController;

