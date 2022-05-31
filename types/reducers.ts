import { Reducer } from "react";
import { ReducerActions } from "./actions";
import { GlobalState } from "./globalState";
import { NonFeaturedProduct, Product } from "./product";

export type MainReducer = Reducer<GlobalState, ReducerActions>;

export type ProductsReducer = Reducer<NonFeaturedProduct[], ReducerActions>;

export type CartModalReducer = Reducer<boolean, ReducerActions>;

export type CartReducer = Reducer<Product[], ReducerActions>;
