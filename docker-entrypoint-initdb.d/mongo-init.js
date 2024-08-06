const { freelancerSchema } = require("../backend/models/freelancerModel");

freelancerSchema = freelancerSchema.getSiblingDB('freelancer_hub');

freelancerSchema.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{
    role: 'readWrite',
    freelancerSchema: 'freelancer_hub'
  }],
}, );

freelancerSchema.createCollection('freelancer', {
  clusteredIndex: {
    "key": {
      _id: 1
    },
    "unique": true,
    "name": "user clustered key"
  }
});

freelancerSchema.getCollection("freelancer").createOne({
  _id: ObjectId(),
  name: 'Freelancer XPTO',
  ranking: 2,
  projectsCompleted: 444,
  registeredSince: '26/07/2016',
  professionalTitle: 'ESPECIALISTA EM LOGO/IDENTIDADE VISUAL',
  aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  skills: ['Arte-Final', 'Blender 3D', 'Corel Draw', 'Design 3D']
});