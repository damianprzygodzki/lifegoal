import * as types from '../constants/ActionTypes'

export function goalInputChanged(goal) {
    return {
        type: types.GOAL_INPUT_CHANGED,
        goal: goal
    }
}

export function mainGoalSubmitted(goal) {
    return {
        type: types.MAIN_GOAL_SUBMITTED,
        goal: goal
    }
}
export function subGoalSubmitted(goal) {
    return {
        type: types.SUB_GOAL_SUBMITTED,
        goal: goal
    }
}
