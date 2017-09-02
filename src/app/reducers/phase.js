const initialState = "dashboard";

export default function(state = initialState, action){
    switch(action.type){
        case "CHANGE_PHASE":
            return action.phase;
        default:
            return state;
    }
}