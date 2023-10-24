const router = require('express').Router();
const apiRoutes = require('./api');
const thoughtsRoutes = require('./thoughtRoutes')
const usersRoutes = require('./userRoutes')

router.use('/thoughts', thoughtsRoutes)
router.use('/users', usersRoutes)

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
