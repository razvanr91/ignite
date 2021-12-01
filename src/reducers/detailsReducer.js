const initialState = { game: {}, screen: {} };

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return { ...state, game: action.payload.game, screen: action.payload.screen }
        default:
            return { ...state }
    }
}

export default detailsReducer;