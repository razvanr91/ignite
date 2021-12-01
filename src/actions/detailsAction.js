import axios from "axios";
import { gameDetailsUrl } from "../api";

const getDetails = (id) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsUrl(id));

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data
        }
    })
};
