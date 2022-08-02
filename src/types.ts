export const initial = { 
  time: [0, 0], toggle: false, 
  input: "", leaderboard: [] };
export type state = { 
  time: number[]; toggle: boolean; input: string, 
  leaderboard: {name: string, time: number}[] };

type toggle = {type: "toggle";value: boolean;};
type reset = {type: "reset";};
type setTime = {type: "set-time";position: 0 | 1;};
type input = {type: "input";text: string;};
type clearInput = {type: "clear-input";};
type leaderboard = {type: "leaderboard",
arr: {name: string, time: number}[]}

export type actions = 
toggle | reset | setTime | input | clearInput | leaderboard;
