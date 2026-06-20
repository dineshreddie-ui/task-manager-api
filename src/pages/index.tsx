import { api } from "@/utils/api";

export default function Home() {
  

  const { data: tasks, refetch } = api.task.getTasks.useQuery({
  page: 1,
  limit: 10,
});

  const createTask = api.task.createTask.useMutation({
    onSuccess: () => {
      void refetch();
    },
  });

  const updateTask = api.task.updateTask.useMutation({
  onSuccess: () => {
    void refetch();
  },
});

const deleteTask = api.task.deleteTask.useMutation({
  onSuccess: () => {
    void refetch();
  },
});
const totalTasks = tasks?.length ?? 0;

const completedTasks =
  tasks?.filter((task) => task.status === "completed").length ?? 0;

const pendingTasks =
  tasks?.filter((task) => task.status === "pending").length ?? 0;

const inProgressTasks =
  tasks?.filter((task) => task.status === "in-progress").length ?? 0;

  return (
  <main style={{ padding: "20px" }}>
    <h1>Task Manager API Test</h1>

    <button
  onClick={() =>
    createTask.mutate({
      title: `Task ${Date.now()}`,
      description: "Testing CRUD",
    })
  }
>
  Create Test Task
</button>

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div>
        <h3>Total Tasks</h3>
        <p>{totalTasks}</p>
      </div>

      <div>
        <h3>Completed</h3>
        <p>{completedTasks}</p>
      </div>

      <div>
        <h3>In Progress</h3>
        <p>{inProgressTasks}</p>
      </div>

      <div>
        <h3>Pending</h3>
        <p>{pendingTasks}</p>
      </div>
    </div>

    <h2>Tasks</h2>

    {tasks?.map((task) => (
  <div
    key={task.id}
    style={{
      border: "1px solid black",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <p>
      <strong>{task.title}</strong>
    </p>

    <p>{task.description}</p>

    <p>Status: {task.status}</p>

    <button
      onClick={() =>
        updateTask.mutate({
          id: task.id,
          status: "in-progress",
        })
      }
    >
      In Progress
    </button>

    <button
      onClick={() =>
        updateTask.mutate({
          id: task.id,
          status: "completed",
        })
      }
      style={{ marginLeft: "10px" }}
    >
      Complete
    </button>

    <button
      onClick={() =>
        deleteTask.mutate({
          id: task.id,
        })
      }
      style={{ marginLeft: "10px" }}
    >
      Delete
    </button>
  </div>
))}
  </main>
);
}