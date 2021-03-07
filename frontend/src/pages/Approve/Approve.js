import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {
    BackButton
} from 'components'

import {
    Container,
    ButtonContainer,
    Title,
    ButtonLabel
} from './approveStyle.js'
import { getUser, getGoal, setGoalCompleted } from '../../services/api'
import { Fireworks } from 'fireworks/lib/react'

// todo
// import container
// particles
// load the goal object
// make it cool :ok_hand;

const Approve = ({match}) => {
    const { push } = useHistory();
    const goalId = match.params.id
    const [goal, setGoal] = useState()
    const [showFX, setShowFX] = useState(false)

    useEffect(() => {
        getGoal(goalId).then(setGoal)
    }, [goalId])

    const FIREWORKS_CONFIG = {
        count: 15,
        colors: ['#cc3333', '#4CAF50', '#81C784'],
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 50,
            y: 300 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    const handleApprove = () => {
        setShowFX(true)
        if (goal) {
            setGoalCompleted(goalId, !goal.completed).then(setGoal)
        }
    }

    return <div>
        <Container>
            <BackButton onClick={() => push(`/goal/${goalId}`)}/>
            <Title> {goal ? goal.name : ''} </Title>
            <ButtonLabel>
                Has { goal && <UserName id={goal.author} />} completed this task?
            </ButtonLabel>
            <ButtonContainer>
                <button disabled={false && (goal ? goal.completed : false)} onClick={handleApprove}>
                { (goal ? goal.completed : false) ? 'Approved' : 'Approve!'}
            </button>
            </ButtonContainer>
            { showFX && <Fireworks {...FIREWORKS_CONFIG} /> }
        </Container>
    </div>
} 

const UserName = ({id}) => {
    const [user, setUser] = useState()
    
    useEffect(() => {
        getUser(id).then(setUser)
    }, [id])
    
    const nameStyle = {
        fontWeight: 'bold',
    }

    return <span style={nameStyle}>{user ? user.name : ''}</span>
}

export default Approve
