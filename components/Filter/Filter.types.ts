import { Category } from "../../types/product";

export type FilterProps = {
  close?: () => void;
  className?: string;
  categories: Category[];
};
