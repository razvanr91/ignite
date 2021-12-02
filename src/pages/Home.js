import React, { useEffect } from "react";
import { GameDetails } from "../components/GameDetails";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";

// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/es/index";
import { useLocation } from "react-router-dom";

const GameList = styled(motion.div)`
    padding:0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }    
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    console.log(pathId)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    // Extract data
    const { popularGames, upcomingGames, newGames } = useSelector(state => state.games)
    return (
        <GameList>
            {pathId && <GameDetails />}
            <h2>Upcoing Games</h2>
            <Games>
                {upcomingGames.map(game => {
                    return <Game key={game.id} game={game} />
                })}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popularGames.map(game => {
                    return <Game key={game.id} game={game} />
                })}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game => {
                    return <Game key={game.id} game={game} />
                })}
            </Games>
        </GameList>
    );
}

export default Home;