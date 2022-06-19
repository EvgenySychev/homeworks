import {UserType} from "../HW8";

type ActionType = {type: 'sort' | 'check', payload: 'up' | 'down'} | {type: 'sort' | 'check', payload: 18}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {

    switch (action.type) {

        case 'sort': {
            if (action.payload === 'down') {
                return [...state].sort((a,b)=> a.age-b.age)
            }
            if (action.payload === 'up') {
                return [...state].sort((a,b)=> b.age-a.age)
            }

        }
        case 'check': {
            return state.filter(t => t.age>18).sort((a,b) => b.age-a.age)
        }
        default: return state
    }
}

