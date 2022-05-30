export type MobileModalProps = {
  display: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type MobileModalStyleProps = Pick<MobileModalProps, "display">;
