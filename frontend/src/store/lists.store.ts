import { createContext, Dispatch, SetStateAction } from "react";

export const ListInitialState = [
  {
    id: 0,
    slug: "this-is-example-1",
    title: "This is example 1",
    message: "This is where we can store literally anything you want.",
    complete: true,
    bgColour: "#FFFFFF",
    textColour: "#000000",
  },
  {
    id: 1,
    slug: "this-is-example-2",
    title: "This is example 2",
    message: "This is where we can store literally anything you want.",
    complete: false,
    bgColour: "#000000",
    textColour: "#FFFFFF",
  },
  {
    id: 2,
    slug: "example-3",
    title: "Example 3",
    message: "One more for the road.",
    complete: false,
    bgColour: "#FFFFFF",
    textColour: "#000000",
  },
];

export type TItem = {
  id: number;
  slug: string;
  title: string;
  message: string;
  complete: boolean;
  bgColour: string;
  textColour: string;
};

export type TListType = {
  list: Array<TItem>;
  setList: Dispatch<SetStateAction<Array<TItem>>>;
};
export const ListContext = createContext<TListType | null>(null);
