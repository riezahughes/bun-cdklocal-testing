import { createContext, Dispatch, SetStateAction } from "react";

export const ListInitialState = [
  {
    id: 0,
    slug: "this-is-example-1",
    title: "This is example 1",
    body: "This is where we can store literally anything you want.",
    complete: true,
    bg: "FFFFFF",
    color: "000000",
  },
  {
    id: 1,
    slug: "this-is-example-2",
    title: "This is example 2",
    body: "This is where we can store literally anything you want.",
    complete: false,
    bg: "000000",
    color: "FFFFFF",
  },
  {
    id: 2,
    slug: "example-3",
    title: "Example 3",
    body: "One more for the road.",
    complete: false,
    bg: "FFFFFF",
    color: "000000",
  },
];

export type TItem = {
  id: number;
  slug: string;
  title: string;
  body: string;
  complete: boolean;
  bg: string;
  color: string;
};

export type TListType = {
  list: Array<TItem>;
  setList: Dispatch<SetStateAction<Array<TItem>>>;
};
export const ListContext = createContext<TListType | null>(null);
