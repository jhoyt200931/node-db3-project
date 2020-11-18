// scheme-model
const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

async function find() {
    try {
       return await db('schemes');
    } catch (err) {
        throw err
    }
}

async function findById(id) {
    try {
       return await db('schemes').where({id});
    } catch (err) {
        throw err
    }
}

async function findSteps(id) {
    try {
      return await db('steps').where({scheme_id: id})
    } catch (err) {
        throw err
    }
}

async function add(schemeData) {
    try {
        const ids = await db('schemes').insert(schemeData);
        const newScheme = await findById(ids[0]);
        return newScheme
    } catch (err) {
        throw err
    }
}

async function update(changes, id) {
    try {
        await db('schemes').where({id}).update(changes);
        return await findById({id});
    } catch (err) {
        throw err
    }
}

async function remove(id) {
    try {
        return await db('schemes').del().where({id});
    } catch (err) {
        throw err
    }
}