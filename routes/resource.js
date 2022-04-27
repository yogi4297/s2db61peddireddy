var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var toasted_controller = require('../controllers/toasted');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/toasted', toasted_controller.toasted_create_post);
// DELETE request to delete bakery.
router.delete('/toasted/:id', toasted_controller.toasted_delete);
// PUT request to update bakery.
router.put('/toasted/:id', toasted_controller.toasted_update_put);
// GET request for one bakery.
router.get('/toasted/:id', toasted_controller.toasted_detail);
// GET request for list of all bakery items.
router.get('/toasted', toasted_controller.toasted_list);
module.exports = router;