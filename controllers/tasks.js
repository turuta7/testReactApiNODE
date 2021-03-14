import Users from '../models/tasks.js'

const getAll = async (req, res) => {
    try {
         res.send(await Users.collection.drop());
    } catch (err) {
        res.send(err.message || err);
    }

}

export default {getAll}