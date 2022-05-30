import { useEffect } from "react";

const enableBodyScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

export const useDisableBodyScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
    } else enableBodyScroll();
  }, [open]);

  useEffect(() => () => enableBodyScroll(), []);
};
