const logger = require('../../utils/logger');
const DeveloperSchema = require('../models/Developer');
const SuccessResponse = require('../../utils/SuccessResponse');
const ErrorResponse = require('../../utils/ErrorResponse');

const createDeveloper = async (req, res) => {
    try {
        const { fname, lname, image, email, mobile, role, position } = req.body;
        const developer = new DeveloperSchema({ fname, lname, image, email, mobile, role, position });
        const savedDeveloper = await developer.save();
        logger.info('Create developer query was successful');
        res.status(201).json(
            new SuccessResponse(
                201,
                "Create developer query was successful",
                savedDeveloper
            )
        );
    } catch (error) {
        logger.error('Create developer internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Create developer internal server error",
                error.message
            )
        );
    }
}

const getDeveloper = async (req, res) => {
    try {
        if(!req.params.developerId) {
            return res.status(422).json(
                new ErrorResponse(
                    422,
                    "Get developer query was failed",
                    "Developer Id not found. Missing from the request."
                )
            );
        }
        const developer = await DeveloperSchema.findById(req.params.developerId);
        if(!developer) {
            return res.status(404).json(
                new ErrorResponse(
                    404,
                    "Get developer query was failed",
                    "Developer not found. Developer Id not found."
                )
            );
        }
        logger.info('Get developer query was successful');
        res.status(200).json(
            new SuccessResponse(
                200,
                "Get developer query was successful",
                developer
            )
        );
    } catch (error) {
        logger.error('Get developer internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get developer internal server error",
                error.message
            )
        );
    }
}

const getDevelopers = async (req, res) => {
    try {
        const developers = await DeveloperSchema.find();
        logger.info('Get developers query was successful');
        res.status(200).json(
            new SuccessResponse(
                200,
                "Get developers query was successful",
                developers
            )
        );
    } catch (error) {
        logger.error('Get developers internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get developers internal server error",
                error.message
            )
        );
    }
}

const deleteDeveloper = async (req, res) => {
    try {
        if(!req.params.developerId) {
            return res.status(422).json(
                new ErrorResponse(
                    422,
                    "Delete developer query was failed",
                    "Developer Id not found. Missing from the request."
                )
            );
        }
        const developer = await DeveloperSchema.findById(req.params.developerId);
        if(!developer) {
            return res.status(404).json(
                new ErrorResponse(
                    404,
                    "Delete developer query was failed",
                    "Developer not found. Developer Id not found."
                )
            );
        }
        await DeveloperSchema.findByIdAndDelete(req.params.developerId);
        logger.info('Delete developer query was successful');
        res.status(204).json(
            new SuccessResponse(
                204,
                "Delete developer query was successful",
                "Developer deleted successfully"
            )
        );
    } catch (error) {
        logger.error('Delete developer internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Delete developer internal server error",
                error.message
            )
        );
    }
}

const updateDeveloper = async (req, res) => {
    try {
        if(!req.params.developerId) {
            return res.status(422).json(
                new ErrorResponse(
                    422,
                    "UpdateDelete developer query was failed",
                    "Developer Id not found. Missing from the request."
                )
            );
        }
        const developer = await DeveloperSchema.findById(req.params.developerId);
        if(!developer) {
            return res.status(404).json(
                new ErrorResponse(
                    404,
                    "UpdateDelete developer query was failed",
                    "Developer not found. Developer Id not found."
                )
            );
        }
        const { fname, lname, image, email, mobile, role, position } = req.body;
        const updatedDeveloper = await DeveloperSchema.findByIdAndUpdate(
            req.params.developerId,
            {
                $set: { 
                    fname, 
                    lname, 
                    image, 
                    email, 
                    mobile,
                    role,
                    position
            }},
            { new: true }
        );
        logger.info('Update developer query was successful');
        res.status(201).json(
            new SuccessResponse(
                201,
                "Update developer query was successful",
                updatedDeveloper
            )
        );
    } catch (error) {
        logger.error('Update developer internal server error');
        logger.error(error);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Update developer internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    createDeveloper,
    getDeveloper,
    getDevelopers,
    deleteDeveloper,
    updateDeveloper
};