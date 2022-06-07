import { useState } from 'react';
import { putUserVote } from '../../api/axios';

const imgThumbDown = require("../../assets/img/thumbs-down.svg").default;
const imgThumbUp = require("../../assets/img/thumbs-up.svg").default;

const VotingBox = ({ character, setCharacter, setParams, voted, setVoted }) => {
    // debugger
    const [ thumb, setThumb ] = useState(null);
    const btnDisable = thumb === "positive" || thumb === "negative" || voted
                       ? false
                       : true;

    const handleThumbClick = (e) => {
        if (e.target.className.includes("style-thumb-up")) setThumb("positive");
        if (e.target.className.includes("style-thumb-down")) setThumb("negative");
    }

    const handleVoteClick = () => {
        if (voted){
            localStorage.removeItem(`rule-of-thumb-id-${ character.id }`);
            setVoted (false);
        }
        else {
            putUserVote( thumb, setThumb, character, setCharacter, setParams, setVoted );
        } 
    }


    return (
        <>
            { voted ? null
                    : <>
                        <button
                            className={`style-thumb-up${(thumb === "positive") ? " select" : "" }`}
                            onClick={ handleThumbClick }
                            style={{backgroundImage: `url(${imgThumbUp})`}}
                        />
                        <button
                            className={`style-thumb-down${(thumb === "negative") ? " select" : "" }`}
                            onClick={ handleThumbClick }
                            style={{backgroundImage: `url(${imgThumbDown})`}}
                        />
                      </>
            }

            <button
                className={`card-row__voting__vote-now ${btnDisable ? "vote-disabled" : null }`}
                onClick={ handleVoteClick }
                disabled={btnDisable}
            >
                { voted ? "Vote Again" : "Vote Now"}
            </button>
        </>
    );
}

export default VotingBox;
