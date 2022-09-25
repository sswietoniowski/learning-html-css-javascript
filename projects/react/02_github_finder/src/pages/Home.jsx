const Home = () => {
  return (
    <>
      <h1 className='text-6xl'>Welcome</h1>
      <p>{process.env.REACT_APP_GITHUB_API_URL}</p>
      <p>{process.env.REACT_APP_GITHUB_API_PAT}</p>
    </>
  );
};

export default Home;
