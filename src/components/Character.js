// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
    .card {
        background: white;
        display: flex;
        width:60%;
        padding: 8px;
        border-radius: 10px;
        flex-direction: column;
        justify-content: space-between;
        color: red;
        margin: auto;
        margin-bottom: 5px;
        margin-top:5px;
    }
    
` 

function Character(props) {
    const {data}=props;
  return (
    <Divider>
    <div className='card-border'>
    <div className='card'>
      <p>{data.name} is {data.height} cm tall.</p>
    </div>
    </div>
    </Divider>
  )
}

export default Character;