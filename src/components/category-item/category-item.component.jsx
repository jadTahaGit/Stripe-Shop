import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div
      key={id}
      className="category-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img src={imageUrl} alt="" />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
