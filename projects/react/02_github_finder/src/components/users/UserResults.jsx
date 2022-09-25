import { useEffect, useState } from 'react';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API_URL}/users`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_PAT}`,
        },
      }
    );
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {loading ? <h1>Loading...</h1> : <h1>{users.length} Users</h1>}

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.login}</h3>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: '100px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default UserResults;
