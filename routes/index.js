const router = require('express').Router();
const apiRoutes = require('./api');
const thoughtRoutes = require('./thoughtRoutes')
const userRoutes = require('./userRoutes')

router.use('/thoughts', thoughtRoutes)
router.use('/users', userRoutes)

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
