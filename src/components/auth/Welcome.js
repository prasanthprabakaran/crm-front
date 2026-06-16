import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  return (
    <section className="welcome">
      <div className="welcome__header">
        <div className="welcome__avatar">{username?.charAt(0).toUpperCase()}</div>
        <div>
          <h1 className="welcome__title">Welcome back, {username}</h1>
          <p className="welcome__date">{today}</p>
        </div>
      </div>

      <div className="welcome__cards">
        <Link to="/dash/tasks" className="welcome__card">
          <div className="welcome__card-icon">📋</div>
          <div>
            <p className="welcome__card-title">View Tasks</p>
            <p className="welcome__card-desc">Manage and track all tasks</p>
          </div>
          <span className="welcome__card-arrow">→</span>
        </Link>

        <Link to="/dash/tasks/new" className="welcome__card">
          <div className="welcome__card-icon">➕</div>
          <div>
            <p className="welcome__card-title">Add New Task</p>
            <p className="welcome__card-desc">Create a new task assignment</p>
          </div>
          <span className="welcome__card-arrow">→</span>
        </Link>

        {(isManager || isAdmin) && (
          <Link to="/dash/users" className="welcome__card">
            <div className="welcome__card-icon">👥</div>
            <div>
              <p className="welcome__card-title">User Settings</p>
              <p className="welcome__card-desc">Manage team members and roles</p>
            </div>
            <span className="welcome__card-arrow">→</span>
          </Link>
        )}

        {(isManager || isAdmin) && (
          <Link to="/dash/users/new" className="welcome__card">
            <div className="welcome__card-icon">👤</div>
            <div>
              <p className="welcome__card-title">Add New User</p>
              <p className="welcome__card-desc">Create a new team member</p>
            </div>
            <span className="welcome__card-arrow">→</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Welcome;