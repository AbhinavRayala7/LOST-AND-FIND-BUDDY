const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const itemController = require('../controllers/itemController');

router.post('/', auth, itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItem);
router.delete('/:id', auth, itemController.deleteItem);

module.exports = router;