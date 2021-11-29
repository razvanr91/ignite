// Base URL
// c1b8f9ec43bf4957a49c9d0eb733b678
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
const popular_games = `${base_url}games?dates${lastYear},${currentDate}&ordering=-rating&page_size=10`;


export const popularGamesUrl = () => popular_games;