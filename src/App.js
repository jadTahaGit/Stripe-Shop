const App = () => {
  const catagories = [
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
    <div className="catagories-container">
      {catagories.map((catagory) => (
        <div className="catagory-container">
          {/* <img src="" alt="" /> */}

          <div className="catagory-body-container">
            <h2>{catagory.title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
