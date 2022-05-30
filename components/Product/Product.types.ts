import { NonFeaturedProduct } from "../../types/types";

export type ProductProps = Omit<NonFeaturedProduct, "featured" | "details">;
