import { useParams } from "react-router-dom";
import EditTaskForm from "./EditTaskForm";
import { useGetTasksQuery } from "./tasksApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import { PulseLoader } from "react-spinners";

const EditTask = () => {
  const { id } = useParams();

  const { username, isManager, isAdmin } = useAuth();

  const { task } = useGetTasksQuery("tasksList", {
    selectFromResult: ({ data }) => ({
      task: data?.entities[id],
    }),
  });

  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!task || !users?.length) return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "20px",
      }}
    >
      <PulseLoader color={"#FFF"} />;
    </div>
  );

  if (!isManager && !isAdmin) {
    if (task.username !== username) {
      return <p className="errmsg">No access</p>;
    }
  }

  const content = <EditTaskForm task={task} users={users} />;

  return content;
};

export default EditTask;
