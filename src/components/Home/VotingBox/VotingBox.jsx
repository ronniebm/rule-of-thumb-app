import { useState } from 'react';
import { putUserVote } from '../../../services/api';

const imgThumbDown = require("../../../../src/assets/img/thumbs-down.svg").default;
const imgThumbUp = require("../../../../src/assets/img/thumbs-up.svg").default;

const VotingBox = ({ character, setCharacter, setParams, voted, setVoted }) => {

    const [ thumb, setThumb ] = useState(null);

    const handleThumbClick = (e) => {
        if (e.target.className.includes("style-thumb-up")) setThumb("positive");
        if (e.target.className.includes("style-thumb-down")) setThumb("negative");
    }

    const handleVoteClick = () => {
        voted ? setVoted (false) 
            : putUserVote( thumb, setThumb, character, setCharacter, setParams, setVoted );
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
                className="card-row__voting__vote-now"
                onClick={ handleVoteClick }
            >
                { voted ? "Vote Again" : "Vote Now"}
            </button>
        </>
    );
}

export default VotingBox;
