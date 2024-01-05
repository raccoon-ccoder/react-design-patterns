export const SmalBookListItem = ({ book }) => {
  const { name, price } = book;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
};
