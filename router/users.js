import express from 'express'

const router = express.Router()

import controller from '../controllers/users.js'
import {validationEmail} from "../utils/checkingMail.js";

router.get('/users', controller.getAll);


// router.get('/users',passport.authenticate('jwt',{session:false}), controller.getAll);
router.post('/users', validationEmail, controller.create);
router.delete('/users/:id', controller.deleteUser);
// router.post('/users/login', controller.login )
// router.put('/users', controller.users)

export default router