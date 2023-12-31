import { useSelector } from "react-redux";

const UserList = () => {
  const { list: users } = useSelector((state) => state.users);

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((user, i) => (
          <div key={i} className="col-md-3 mb-4">
            <div className="card">
              <img src={user.avatar} alt="photo" />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
