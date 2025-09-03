const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/', user_controller.all);
router.get('/:id', user_controller.get);
router.post('/', user_controller.create);
router.put('/:id', user_controller.update);
router.delete('/:id', user_controller.delete);

module.exports = router;