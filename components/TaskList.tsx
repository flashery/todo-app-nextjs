import { useMutation } from "@apollo/client";
import { Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { TOGGLE_TASK_MUTATION } from "../graphql/mutations";
import { GET_TASKS_QUERY } from "../graphql/queries";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
}

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  const [toggleTask] = useMutation(TOGGLE_TASK_MUTATION);

  const handleToggleTask = (taskId: string, completed: boolean) => {
    toggleTask({
      variables: { id: taskId, completed },
      refetchQueries: [{ query: GET_TASKS_QUERY }],
    });
  };

  const handleDeleteTask = (taskId: string) => {
    onDeleteTask(taskId);
  };

  return (
    <UnorderedList sx={{ margin: 0 }}>
      {tasks.map((task) => (
        <ListItem className="list-item" key={task.id}>
          <label className="checkbox-container">
            {task.task}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id, !task.completed)}
            />
            <span className="checkmark"></span>
          </label>
          <span className="icon">
            <Icon
              as={MdDelete}
              aria-label="Delete Task"
              onClick={() => handleDeleteTask(task.id)}
            />
          </span>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default TaskList;
