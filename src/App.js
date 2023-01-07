import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womans',
    },
    {
      id: 5,
      title: 'Mans',
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          {/* <img src="" alt="" /> */}

          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
