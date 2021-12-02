import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

export const getDetails = (id) => async (dispatch) => {

    dispatch({ type: "LOADING_DETAILS" });

    const detailsData = await axios.get(gameDetailsUrl(id));
    const screenshotsData = await axios.get(gameScreenshotsUrl(id));

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data,
            screenshots: screenshotsData.data
        }
    })
};