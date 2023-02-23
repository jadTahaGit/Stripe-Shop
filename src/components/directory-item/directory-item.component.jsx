import {
  BackgroundImage,
  ItemBody,
  DirectoryContainer,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>

      <ItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </ItemBody>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
