import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div
      key={id}
      className="directory-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img src={imageUrl} alt="" />

      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
