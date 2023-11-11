import css from './Feedback.module.css';

// const { Component } = require("react");

export const Feedback = ({ 
    // handleGood,
    // handleNeutral,
    // handleBad,

   option,
   onLeaveFeedback
 
}) => {
    // let btnName = ucFirst(name);
    
    return (
        <div className=''>
            {option.map(name => (<button
                className={css.btn}
                key={name}
                onClick={() => onLeaveFeedback(name)
                }>{name.replace(name[0], name[0].toUpperCase())}</button>))}
            

            {/* <button className={css.btn} type="button" onClick={(handleGood)}>Good</button>
            <button className={css.btn} type="button" onClick={(handleNeutral)}>Neutral</button>
            <button className={css.btn} type="button" onClick={(handleBad)}>Bad</button>
         */}
            {/* <button className="button" type="button" onClick={() => handleOption(good)}>Good</button>
            <button className="button" type="button" onClick={() => handleOption(neutral)}>Neutral</button>
            <button className="button" type="button" onClick={() => handleOption(bad)}>Bad</button> */}

        </div>

    )
}