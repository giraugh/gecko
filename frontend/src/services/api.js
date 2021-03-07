import axios from 'axios'

const apiConfig = {
    hostname: 'https://gecko-backend-wrjnj7thaq-ts.a.run.app'
}

export const instance = axios.create({
    baseURL: `${apiConfig.hostname}`,
    timeout: 1000 * 300,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getUser = async (id) => {
    const res = await instance.get(`/users?id=${id}`)
    return res.data.user
}

export const getGoal = async (id) => {
    const res = await instance.get(`/goals?id=${id}`)
    return res.data.goal
}

export const getRefereedGoals = async (id) => {
    const res = await instance.get(`/goals/refereed?id=${id}`)
    return res.data.goals
}

export const getAuthoredGoals = async (id) => {
    const res = await instance.get(`/goals/authored?id=${id}`)
    return res.data.goals
}

export const createGoal = async ({ authorID, friendID, amount, endDate }) => {
    const res = await instance.post(`/goals`, {
        author: authorID,
        friend: friendID,
        amount,
        startDate: Date.now(),
        endDate
    })
    return res.data.goal
}

export const createUser = async ({ email, phone }) => {
    const res = await instance.post(`/users`, {
        email,
        phone
    })
    return res.data.user
}

export const setGoalCompleted = async (id, completed) => {
    const res = await instance.post(`/goals/complete`, {
        id,
        completed
    })
    return res.data.goal
}
