const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function incrementLike(){
  return {
    type:INCREMENT,
  }
}

export function decrementLike(){
  return {
    type:DECREMENT,
  }
}