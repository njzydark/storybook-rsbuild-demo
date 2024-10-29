type Props = {
  /** 点击回调 */
  onClick?: () => void;
  /**
   *  名称
   * @default button
   */
  name?: string;
};

export const Button = ({ onClick, name = 'button' }: Props) => {
  const handleClick = () => {
    onClick?.();
  };

  return <div onClick={handleClick}>{name}</div>;
};
