import React, { Fragment } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/es";
// Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { smallImage } from "../util";

const CardShadow = styled(motion.div)`
    width:100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676 ;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export const GameDetails = () => {
    const history = useNavigate();
    const exitDetailsHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history("/");
        }
    }

    const { screenshots, game, isLoading } = useSelector(state => state.details)
    return (
        <Fragment >
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailsHandler} >
                    <Details >
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(platform => {
                                        return <h3 key={platform.platform.id} >{platform.platform.name}</h3>
                                    })}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={smallImage(game.background_image, 1280)} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map(screenshot => {
                                return <img key={screenshot.id} src={smallImage(screenshot.image, 1280)} alt={game.name} />
                            })}
                        </div>
                    </Details>
                </CardShadow>
            )}
        </Fragment>
    );
}