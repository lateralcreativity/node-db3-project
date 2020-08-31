const db = require('../data/connection');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({id: id})
    .first()
}

function findSteps(id) {
    return db('steps')
    .where({id: id})
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id')
    .then(payload => {
        return findById(payload)
    })
}

function update(changes, id) {
    return db('schemes')
    .where({id: id})
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

async function remove(id) {
    const removed = await findById(id);

    return db('schemes')
    .where({id: id})
    .del()
    .then(() => removed)
}