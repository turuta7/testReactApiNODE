import Users from '../models/users.js'
import jwt from 'jsonwebtoken'

const getAll = async (req, res) => {
    try {
        res.send(await Users.find());
    } catch (err) {
        res.send(err.message || err);
    }

}

const create = async (req, res) => {
    const {username, email, password,confirmedAt} = req.body;
    try {
        res.send(await Users.create({
            email,
            password,
            username,
            confirmedAt

        }))
    } catch (err) {
        res.send(err.message || err)
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        res.send(await Users.deleteOne({
            _id: id
        }))
    } catch (err) {
        res.send(err.message || err)
    }
}

const login = async (req, res) => {
    const candidate = await Users.findOne({email: req.body.email});
    if (candidate) {
        const password = req.body.password;
        console.log(password, candidate.password)
        if (password === candidate.password) {
            const token = await jwt.sign({
                userId: candidate._id,
                email: candidate.email
            }, `${process.env.SECRET}`, {expiresIn: 60 * 60})

            res.status(200).send({token: `Bearer ${token}`})
        } else {
            res.status(401).send({message: 'no password'})
        }
    } else {
        res.status(404).send({message: 'no user'})
    }
};

export default {create, deleteUser, getAll, login}