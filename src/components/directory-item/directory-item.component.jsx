import { useNavigate } from 'react-router';
import {
  BackgroundImage,
  ItemBody,
  DirectoryContainer,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>

      <ItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </ItemBody>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
