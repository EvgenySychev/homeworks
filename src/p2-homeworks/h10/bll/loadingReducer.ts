
type initStateType = {
    loading: boolean
}
type loadingACType = ReturnType<typeof loadingAC>
type ActionType = loadingACType

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case "START-LOADING" : {
            return {...state, loading:action.load}

        }
        default: return state
    }
}

export const loadingAC = (load: boolean) => ({type: "START-LOADING",load} as const)