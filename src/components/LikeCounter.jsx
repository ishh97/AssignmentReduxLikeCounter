import React, { useState } from 'react';
import { createStore } from 'redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const myStore = createStore(reducer)


export default function LikeCounter() {

  const [like, setLike] = useState(0);

  const unsubscribe = myStore.subscribe(()=>{
    setLike(myStore.getState().count)
  })  

  return (
    <div>
      <h1>{like}</h1>
      <button onClick={()=>myStore.dispatch(incrementLike())}>Like</button>
      <button onClick={()=>myStore.dispatch(decrementLike())}>Unlike</button>
    </div>
  )
}