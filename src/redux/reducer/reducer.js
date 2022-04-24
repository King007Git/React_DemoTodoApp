let initState = [];
if (localStorage.getItem("completed_todos") === null) {
    initState = [];
} else {
    initState = JSON.parse(localStorage.getItem("completed_todos"))
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "add":
            state.push(action.payload);
            localStorage.setItem("completed_todos", JSON.stringify(state));
            return state.map((val) => {
                return val;
            });
        case "remove":
            state.pop(state.findIndex(function(item, i){
                return item.completedOn === action.payload
            }))
            localStorage.setItem("completed_todos", JSON.stringify(state));
            return state.map((val) => {
                return val;
            });
        default:
            return state;
    }
}
export default reducer;