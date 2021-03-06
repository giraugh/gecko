import axios from 'axios'

const apiConfig = {
    hostname: 'https://gecko-backend-wrjnj7thaq-ts.a.run.app',
    port: 8080
}

export const instance = axios.create({
    baseURL: `${apiConfig.hostname}${apiConfig.port}`,
    timeout: 1000 * 300,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getUser = async (id) => {
    const user = await instance.get(`/users?id=${id}`)
    return user
}

export const getGoal = async (id) => {
    const goal = await instance.get(`/goals?id=${id}`)
    return goal
}

export const getRefereedGoals = async (id) => {
    const goals = await instance.get(`/goals/refereed?id=${id}`)
    return goals
}

export const getAuthoredGoals = async (id) => {
    const goals = await instance.get(`/goals/authored?id=${id}`)
    return goals
}

export const createGoal = async (authorID, friendID, amount, endDate) => {
    const goal = await instance.post(`/goals`, {
        author: authorID,
        friend: friendID,
        amount,
        startDate: Date.now(),
        endDate
    })
}
