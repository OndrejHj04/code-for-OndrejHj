import { actions, initial, state } from "./types";
import { useEffect, useReducer } from "react";
import { PlayScreen } from "./PlayScreen";
import { Leaderboard } from "./Leaderboard";
import { data } from "./database";

const reducer = (state: state, actions: actions) => {
  switch (actions.type) {
    case "toggle":
      return { ...state, toggle: actions.value };
    case "reset":
      return { ...state, time: [0, 0], toggle: false };
    case "set-time":
      return { ...state, time: actions.position ? [state.time[0], new Date().getTime()] : [new Date().getTime(), state.time[1]] };
    case "input":
      return { ...state, input: actions.text };
    case "clear-input":
      return { ...state, input: "" };
    case "leaderboard":
      return { ...state, leaderboard: actions.arr.sort((a,b)=>a.time - b.time) };
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const delay = Math.ceil(Math.random() * 10000) + 2000;

  useEffect(()=>{
    let arr:{name: string, time: number}[] = []
    data.then(res=>{
      res.forEach(item=>{
        arr.push(item.data() as {name: string, time: number})
      })
    })
    dispatch({type: "leaderboard", arr: arr})
  },[])

  useEffect(() => {
    state.time[0] === 0 &&
      state.time[1] === 0 &&
      setTimeout(() => {
        dispatch({ type: "toggle", value: true });
      }, delay);
  }, [state.time]);

  useEffect(() => {
    state.toggle && dispatch({ type: "set-time", position: 0 });
    !state.toggle && state.time[0] && dispatch({ type: "set-time", position: 1 });
  }, [state.toggle]);

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        { state.time[0] > 0 && state.time[1] > 0 ? (
          <Leaderboard state={state} dispatch={dispatch}/>
        ) : (
          <>
            <PlayScreen state={state} dispatch={dispatch}/>
          </>
        )}
      </div>
    </>
  );
};