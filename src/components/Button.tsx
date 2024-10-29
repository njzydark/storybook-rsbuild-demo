export const Button = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <div onClick={handleClick}>button</div>;
};
