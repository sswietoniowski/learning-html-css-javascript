import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import GitHubContext from '../context/github/GitHubContext';

const User = () => {
  const { user, getSingleUser } = useContext(GitHubContext);
  const params = useParams();

  useEffect(() => {
    getSingleUser(params.login);
    // getUserRepo(params.login)
  }, []);

  return <div>{user.login}</div>;
};

export default User;
