import { useState } from 'react';
import { calculateVotes, capitalizeString, cutString, searchStorage } from '../../../assets/helpers';
import VotingBox from '../VotingBox/VotingBox';
import { PLACEHOLDERS } from '../../../settings/constants';
import './CardGrid.scss';

const imgThumbDown = require("../../../../src/assets/img/thumbs-down.svg").default;
const imgThumbUp = require("../../../../src/assets/img/thumbs-up.svg").default;

const CardGrid = ({ data, width }) => {

    let { id, name, description, category, picture, votes } = data;
    let [ voted, setVoted ] = useState( searchStorage( data.id ) );
    const [ character, setCharacter ] = useState( data );
    const [params, setParams] = useState( calculateVotes(votes) );
    const mobile = { height: 300, width: 300};

    return (
        <div
            className="card" key={ id }
            style={ width <= 1024 ? mobile : null}
        >
            <img
                className="card__img"
                src={ picture }
                alt={ picture }
                style={ width <= 1024 ? mobile : null}
            />
            <div className="card__content">

                <div className="style-thumb-down" style={params.good ? {backgroundColor: "#3CBBB4"} : {}}>
                    <img src={ params.good ? imgThumbUp : imgThumbDown } alt="thumbs-down" />  
                </div>

                <div className="card__top">
                    <div>
                        <h2 className="card__artist">{ cutString(name, 20) }</h2>
                        <p className="card__text">{ cutString(description, 56) }</p>
                        <p className="card__time">
                            {
                                voted ? PLACEHOLDERS.thanks
                                      : `1 month ago in ${ capitalizeString(category) }`
                            }
                        </p>
                    </div>
                    <div
                        className="card__voting"
                        style={ voted ? { justifyContent: 'flex-end' }: null}
                    >
                        <VotingBox 
                            character={ character }
                            setCharacter={ setCharacter }
                            setParams={ setParams }
                            voted={ voted }
                            setVoted= { setVoted }
                        />
                    </div>
                </div>

                <div
                    className="card__bottom"
                    style={ width <= 1024 ? { width: 300} : null}
                >
                    <div className="card__bottom__left" style={{width: `${params.leftWidth}vw`}}>
                        <img className="card__bottom__left__icon" src={ imgThumbUp } alt="thumbs-down" />
                        <span className="card__bottom__left-rank">{ params.leftPercent }</span>
                    </div>
                    <div className="card__bottom__right" style={{width: `${params.rightWidth}vw`}}>
                        <span className="card__bottom__right-rank">{ params.rightPercent }</span>
                        <img className="card__bottom__left__icon" src={ imgThumbDown } alt="thumbs-down" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardGrid;
