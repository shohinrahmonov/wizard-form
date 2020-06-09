export function stepReducer (state, action){
    switch(action.type){
        case "complete":
            return {...state, steps: state.steps.map(step=> step.id === action.payload ? {id: action.payload, title: step.title, description: step.description, complete: true} : step)};
        case "addCurrent":
            return {...state, current: state.current + 1};
        case "avaiable":
            return {...state, current: action.payload};
        case "back":
            return {...state, current: state.current - 1};
        case "fill":
            console.log('fill', action.payload.data);
            console.log('id', action.payload.id);
            return {...state, steps: state.steps.map(step=> step.id === action.payload.id ? {id: action.payload.id, title: step.title, description: step.description, complete: true, formData: [action.payload.data]} : step)};
        default:
            return state;
    }
}