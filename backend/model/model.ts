let db = require('../data/db.json')

export const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(db)
    })
}