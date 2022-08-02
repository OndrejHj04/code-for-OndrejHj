import { actions, state } from "./types"

export const Form = ({submit, state, dispatch}:{submit:(e:React.SyntheticEvent)=>void, state:state, dispatch:(value:actions)=>void}) => {

    return (
        <form onSubmit={submit} style={{ fontSize: 40 }} className="flex w-fit mx-auto">
        <input value={state.input} type="text" className="outline-none border-4 border-black rounded-l-full px-2" onChange={(e) => dispatch({ type: "input", text: e.target.value })} />
        <button className="bg-green-500 rounded-r-full px-2">submit!</button>
      </form>
    )
}