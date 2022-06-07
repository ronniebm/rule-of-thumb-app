import { useState } from 'react';
import { calculateVotes, capitalizeString, cutString, searchStorage } from '../../assets/helpers';
import VotingBox from '../VotingBox/VotingBox';
import { PLACEHOLDERS } from '../../settings/constants';
import './CardList.scss';

const imgThumbDown = require("../../assets/img/thumbs-down.svg").default;
const imgThumbUp = require("../../assets/img/thumbs-up.svg").default;


const CardList = ({ data }) => {

    const { name, description, category, picture, votes } = data;
    const [voted, setVoted] = useState( searchStorage( data.id ) );
    const [character, setCharacter] = useState( data );
    const [params, setParams] = useState( calculateVotes(votes) );

    return (
        <div className="card-row">
            <img className="card-row__img" src={ picture } alt={ picture } />
            <div className="card-row__content">
                <div className="card-row__gradient"/>
                <div className="card-row__corner" style={params.good ? {backgroundColor: "#3CBBB4"} : {}}>
                    <img src={ params.good ? imgThumbUp : imgThumbDown } alt="thumbs-down" />  
                </div>

                <div className="card-row__top">
                    <div>
                        <h2 className="card-row__artist">{ cutString(name, 50) }</h2>
                        <p className="card-row__text">{ cutString(description, 76) }</p>
                        <p className="card-row__time">
                            {
                                voted ? PLACEHOLDERS.thanks
                                      : `1 month ago in ${ capitalizeString(category) }`
                            }
                        </p>
                    </div>
                    <div 
                        className="card-row__voting" 
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

                <div className="card-row__bottom">
                    <div className="card-row__bottom__left" style={{width: `${params.leftWidth}vw`}}>
                        <img className="card-row__bottom__left__icon" src={ imgThumbUp } alt="thumbs-down" />
                        <span className="card-row__bottom__left-rank">{ params.leftPercent }</span>
                    </div>
                    <div className="card-row__bottom__right" style={{width: `${params.rightWidth}vw`}}>
                        <span className="card-row__bottom__right-rank">{ params.rightPercent }</span>
                        <img className="card-row__bottom__left__icon" src={ imgThumbDown } alt="thumbs-down" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CardList;
