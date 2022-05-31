export type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  paginate: (page: number) => void;
};

export type IconProps = {
  $show: boolean;
};

export type PaginationTextProps = {
  active: boolean;
};
