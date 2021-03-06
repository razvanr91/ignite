// Base URL
const base_url = "https://api.rawg.io/api/"

// Get date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;

    else return month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) return `0${day}`;

    else return day;
}

const getCurrentYear = new Date().getFullYear();
const currentDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth()}-${getCurrentDay()}`;


// Popular Games
const popular_games = `${base_url}games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `${base_url}games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `${base_url}games?key=${process.env.REACT_APP_RAWG_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesUrl = () => popular_games;
export const upcomingGamesUrl = () => upcoming_games;
export const newGamesUrl = () => new_games;
export const gameDetailsUrl = (gameId) => `${base_url}games/${gameId}?key=${process.env.REACT_APP_RAWG_KEY}`;
export const gameScreenshotsUrl = (gameId) => `${base_url}games/${gameId}/screenshots?key=${process.env.REACT_APP_RAWG_KEY}`;
export const searchedGameUrl = (gameName) => `${base_url}games?key=${process.env.REACT_APP_RAWG_KEY}&search=${gameName}&page_size=12`;