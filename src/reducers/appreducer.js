
export const initState = {
    user: "",
    userData: "",
    contentData: ""
};

export const appReducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":

            return {
                ...state,
                user: action.payload
            }
        case "GET_USER_DATA":

            return {
                ...state,
                userData: action.payload
            }
        case "GET_DETAILS_DATA":

            return {
                ...state,
                contentData: action.payload
            }
        case "NO_SUB":

            return {
                ...state,
                contentData: {
                    Description: "Your subscription expired! Subscribe and try again.",
                }
            }
        case "USER_LOGOUT":
            return (
                state = initState
            )

        default:
            return state
    }
}