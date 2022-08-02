import { actions, state } from "./types";

export const PlayScreen = ({state, dispatch}:
  {state:state, dispatch: (value: actions)=>void}) => {
  return (
    <>
      <div className="w-full h-full flex">
        {state.toggle && (
          <div id="square" onClick={() => dispatch({ type: "toggle", value: false })}>
            click me!</div>
        )}
      </div>
      <h1 className="text-5xl my-5 text-center" 
      id="mes">test your reaction time!</h1>
    </>
  );
};
