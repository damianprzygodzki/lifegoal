import * as types from '../constants/ActionTypes';
import update from 'react-addons-update';


const initialState = {
    goalPath: {
        mainGoal: "",
        subGoals: []
    },
    goalInput: ""
}

export default function goalStateHandler(state = initialState, action) {
    switch(action.type){
        case types.GOAL_INPUT_CHANGED:
            return Object.assign({}, state, {
                goalInput: action.goal
            })
        case types.MAIN_GOAL_SUBMITTED:
            return update(state, {
                goalPath: {
                    mainGoal: {$set: action.goal}
                }
            })
        case types.SUB_GOAL_SUBMITTED:
            return update(state, {
                goalPath: {
                    subGoals: {
                        $push: [{
                            value: action.goal,
                            id: state.goalPath.subGoals.reduce((maxId, goal) => Math.max(goal.id, maxId), -1) + 1
                        }]
                    }
                }
            })
        default:
            return state
    }
}
