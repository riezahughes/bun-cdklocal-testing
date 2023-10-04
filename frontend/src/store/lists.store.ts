import { createContext, Dispatch, SetStateAction } from "react";

export const ListInitialState = [
  {
    id: 1,
    slug: "this-is-example-1",
    title: "This is example 1",
    body: "This is where we can store literally anything you want.",
  },
  {
    id: 2,
    slug: "this-is-example-2",
    title: "This is example 2",
    body: "This is where we can store literally anything you want.",
  },
  {
    id: 1,
    slug: "example-3",
    title: "Example 3",
    body: "One more for the road.",
  },
];

type TItem = {
  id: number;
  slug: string;
  title: string;
  body: string;
};

export type TListType = {
  list: Array<TItem>;
  setList: Dispatch<SetStateAction<Array<TItem>>>;
};
export const ListContext = createContext<TListType | null>(null);
