const express = require('express');
const router = express.Router();

const medicoController = require('../controller/medicoController');
router.get('/', medicoController.list);
router.post('/', medicoController.save);
router.delete('/:coddoctor', medicoController.delete);
router.get('/:coddoctor', medicoController.edit);
router.post('/:coddoctor', medicoController.update);

module.exports = router;
