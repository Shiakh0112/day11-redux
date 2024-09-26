import { legacy_createStore } from "redux";
import { CounterApp } from "./reducer";

export const store = legacy_createStore(CounterApp);
