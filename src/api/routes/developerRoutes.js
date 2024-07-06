const express = require('express');
const { createDeveloper, getDeveloper, getDevelopers, updateDeveloper, deleteDeveloper } = require('../controllers/developerControllers');

const router = express.Router();

router.post('/', createDeveloper);

router.get('/:developerId', getDeveloper);

router.get('/', getDevelopers);

router.put('/:developerId', updateDeveloper);

router.delete('/:developerId', deleteDeveloper);

module.exports = router;