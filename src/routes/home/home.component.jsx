import Directory from '../../components/directory/directory.component';
const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://media.istockphoto.com/id/1048131248/de/foto/wild-west-retro-leder-cowboyhut-und-alte-stiefel-front-beton-wand-hintergrund-vintage.jpg?s=612x612&w=is&k=20&c=CDxdt4-vdboPlA6X8WkqgvJVn18XXRUYmAfemV5BF_w=',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://media.istockphoto.com/id/1402881348/de/foto/damenjacke-in-kapuze-isoliert-auf-wei%C3%9Fem-hintergrund-windbreaker-jacke-l%C3%A4ssiger-stil.jpg?s=612x612&w=is&k=20&c=bljjhXTx8hQZ0uZcOVO5MAytIOVepSDUhrwSEWlLGKk=',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl:
        'https://media.istockphoto.com/id/1168124826/de/foto/rosa-schuhe-isoliert-auf-wei%C3%9Fem-hintergrund.jpg?s=612x612&w=is&k=20&c=c_HBK5IuVMpKiDIxFihldxSVjRPiELwvWffkofZ3Dns=',
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl: 'https://pixlr.com/images/index/remove-bg.webp',
    },
    {
      id: 5,
      title: 'Mans',
      imageUrl:
        'https://t4.ftcdn.net/jpg/02/97/24/51/360_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg',
    },
  ];
  return <Directory categories={categories}></Directory>;
};

export default Home;
