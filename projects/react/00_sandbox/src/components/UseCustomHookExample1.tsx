import useFetch from '../hooks/useFetch';

const UseCustomHookExample1 = () => {
  const response = useFetch('https://jsonplaceholder.typicode.com/users', {});

  console.log(response);

  const { data, loading, error } = response;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {response.error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCustomHookExample1;
