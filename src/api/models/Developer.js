const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Mobile Developer', 'DevOps', 'Quality Assurance', 'UI/UX', 'Data', 'Machine Learning', 'Artificial Intelligence', 'Cloud Engineer', 'Game Developer'],
        default: 'Engineer',
        required: true
    },
    position: {
        type: String,
        enum: ['Intern Engineer', 'Associate Engineer', 'Engineer', 'Senior Engineer', 'Associate Tech Lead', 'Tech Lead', 'Senior Tech Lead', 'Associate Atchitect', 'Atchitect', 'Senior Atchitect', 'Manager', 'Senior Manager'],
        default: 'Engineer',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Developer', DeveloperSchema);