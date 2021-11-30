import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";

// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/es/index";

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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    // Extract data
    const { popularGames, upcomingGames, newGames } = useSelector(state => state.games)
    return (
        <GameList>
            <h2>Upcoing Games</h2>
            <Games>
                {upcomingGames.map(game => {
                    return <Game key={game.id} game={game} />
                })}
            </Games>
        </GameList>
    );
}

export default Home;