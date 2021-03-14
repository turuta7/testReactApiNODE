import express from 'express'
const router = express.Router()

import controller from '../controllers/tasks.js'

// router.get('/tasks', controller.getAll);
// // router.get('/users',passport.authenticate('jwt',{session:false}), controller.getAll);
// router.post('/users', validationEmail, controller.create);
// router.delete('/users/:id', controller.deleteUser);
// // router.post('/users/login', controller.login )
// // router.put('/users', controller.users)

export default router