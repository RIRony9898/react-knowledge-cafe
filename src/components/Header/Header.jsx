import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
