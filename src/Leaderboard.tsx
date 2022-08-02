import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { db } from "./database";
import { Form } from "./Form";
import { actions, state } from "./types";
export const Leaderboard = ({ state, dispatch }: { state: state; dispatch: (value: actions) => void }) => {
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    state.input &&
      setDoc(doc(db, "leaderboard", nanoid()), {
        name: state.input,
        time: state.time[1] - state.time[0],
      });
    dispatch({ type: "clear-input" });
  };
  return (
    <div className="flex w-full h-full flex-col " style={{ fontSize: 50 }}>
      <h1 className="text-center">your reaction time was {state.time[1] - state.time[0]}ms</h1>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <div className="w-fit m-auto aspect-square flex flex-col">
            {state.leaderboard.map((item, index)=>(
              <div className="flex">
                <p>{index}</p>
                <p>{item.name}</p>
                <p>{item.time}ms</p>
              </div>
            ))}

          </div>
        </div>

        <Form submit={submit} state={state} dispatch={dispatch}/>
      </div>
      <button className="mx-auto my-4 px-2 bg-red-500" onClick={() => dispatch({ type: "reset" })}>
        try again
      </button>
    </div>
  );
};