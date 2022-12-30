import NewTaskForm from "./NewTaskForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

const NewTask = () => {
  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users?.length) return (
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

  const content = <NewTaskForm users={users} />;

  return content;
};

export default NewTask;
