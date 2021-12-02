import React from "react";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/es";
// Redux
import { useDispatch } from "react-redux";
import { getDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    };

`;

export default function Game({ game }) {
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(getDetails(game.id));
    }

    return (
        <StyledGame onClick={loadDetailsHandler} >
            <Link to={`/game/${game.id}`} >
                <h3>{game.name}</h3>
                <p>{game.released}</p>
                <img src={smallImage(game.background_image, 640)} alt={game.name} />
            </Link>
        </StyledGame>
    );
}