import { FeaturedProduct } from "../../types/types";

export type FeaturedProps = Omit<FeaturedProduct, "featured" | "currency">;
