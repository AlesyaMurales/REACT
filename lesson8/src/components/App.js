import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/reducers/userReducer/userReducer';
import { loadingSelector, userSelector, errorSelector } from './../redux/reducers/userReducer/selectors';

function App() {

  const users = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  const handleError = () => {
    dispatch(loadUsers())
  }

  if (loading) {
    return (
      < div >
        Идет загрузка
      </div >
    )
  }

  if (error) {
    return (
      < div >
        Произошла ошибка <button onClick={handleError}>Обновить</button>
      </div >
    )
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};
export default App;