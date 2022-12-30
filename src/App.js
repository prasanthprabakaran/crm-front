import { Routes, Route } from "react-router-dom";
import DashLayout from "./components/DashLayout";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import TaskList from "./features/tasksList/TaskList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditTask from "./features/tasksList/EditTask";
import NewTask from "./features/tasksList/NewTask";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from './hooks/useTitle'

function App() {
  useTitle('CRM App')
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound/>}/>

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />} >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

                <Route index element={<Welcome />} />

                {/* users */}
                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]}/>}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                {/* tasks */}
                <Route path="tasks">
                  <Route index element={<TaskList />} />
                  <Route path=":id" element={<EditTask />} />
                  <Route path="new" element={<NewTask />} />
                </Route>
              </Route>
              {/* End Dash */}
            </Route>
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

const NotFound = () =>{
  return <h2>404 Not Found</h2>
}

export default App;
