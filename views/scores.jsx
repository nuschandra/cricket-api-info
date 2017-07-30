import React from 'react';
import {
  Button,
  ButtonArea,
} from 'react-weui';

const Scores = ({teamScores, batsmen, bowlers, matchStatus, matchId}) => {
  return (
    <div>
      <div id='scores' className='static-page'>
        <div className='static-page-body'>
          <div className='scores-body'>
            <div className='team-details'>
              <h2>{teamScores.teamOne}</h1>
              <h2>{teamScores.teamTwo}</h1>
              <p className='match-status'>{matchStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;