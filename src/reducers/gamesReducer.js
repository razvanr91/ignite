const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popular,
                upcomingGames: action.payload.upcoming,
                newGames: action.payload.new
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: []
            }
        default:
            return { ...state }
    }
}

export default gamesReducer;