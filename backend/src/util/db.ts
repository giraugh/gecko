import sqlite from 'sqlite3'
import loadTestData from './loadTestData'

const db = new sqlite.Database('./gecko.db')

// Setup database
db.serialize(() => {
    // Create Users Table
    db.exec(`CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        email VARCHAR(100),
        phone VARCHAR(100),
        name VARCHAR(100)
    );`)

    // Create Goals Table
    db.exec(`CREATE TABLE IF NOT EXISTS Goals (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        author INTEGER NOT NULL,
        friend INTEGER NOT NULL,
        amount DECIMAL,
        startDate INTEGER,
        endDate INTEGER,
        completed BOOLEAN DEFAULT FALSE,
        charity INTEGER
    );`)

    // Create charities table
    db.exec(`CREATE TABLE IF NOT EXISTS Charities (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name VARCHAR(100),
        url VARCHAR(100),
        imageUrl VARCHAR(100)
    );`)

    // Load test data
    loadTestData(db)
})

export const getUser = id => new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Users WHERE id=${id}`, (err, row) => {
        if (err) {
            reject(err)
        } else {
            if (row === undefined) {
                reject(NoSuchRowError(`No such user with id ${id}`))
            } else {
                resolve(row)
            }
        }
    })
})

export const getCharity = id => new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Charities WHERE id=${id}`, (err, row) => {
        if (err) {
            reject(err)
        } else {
            if (row == undefined) {
                reject(NoSuchRowError(`No such charity with id ${id}`))
            } else {
                resolve(row)
            }
        }
    })
})

export const getGoal = id => new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Goals WHERE id=${id}`, (err, row) => {
        if (err) {
            reject(err)
        } else {
            if (row === undefined) {
                reject(NoSuchRowError(`No such goal with id ${id}`))
            } else {
                resolve(row)
            }
        }
    })
})

const CREATE_USER = `INSERT INTO Users (email, phone, name) VALUES`
export const createUser = (fields) => new Promise((resolve, reject) => {
    const query = `${CREATE_USER}("${fields.email}","${fields.phone}", "${fields.name}");`
    db.run(query, function (err) {
        if (err) {
            reject(err)
        } else {
            getUser(this.lastID)
                .then(user => resolve(user)) 
                .catch(err => reject(err))
        }
    })
})

const CREATE_GOAL = `INSERT INTO Goals (author, friend, amount, startDate, endDate, charity) VALUES`
export const createGoal = (fields) => new Promise((resolve, reject) => {
    const query = `${CREATE_GOAL}("${fields.author}","${fields.friend}", "${fields.amount}", "${fields.startDate}", "${fields.endDate}", "${fields.charity}");`
    db.run(query, function (err) {
        if (err) {
            reject(err)
        } else {
            getGoal(this.lastID)
                .then(goal => resolve(goal)) 
                .catch(err => reject(err))
        }
    })
})

export const getAuthoredGoals = (id) => new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Goals WHERE author=${id};`, (error, rows) => {
        if (error) {
            reject(error)
        } else {
            resolve(rows)
        }
    })
})

export const getSponsoredGoals = (id) => new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Goals WHERE friend=${id};`, (error, rows) => {
        if (error) {
            reject(error)
        } else {
            resolve(rows)
        }
    })
})

export const NO_SUCH_ROW_ERR = 'NoSuchRowError'
export const NoSuchRowError = (message) => ({
    name: NO_SUCH_ROW_ERR,
    message
})
