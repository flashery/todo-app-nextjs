import React, { useState, useRef, useEffect } from "react";
import { Button, Flex, Icon, Input, useToast } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { log } from "console";

interface TaskFormProps {
  onAddTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const toast = useToast();
  const [focus, setFocus] = useState(false);
  const addInput: any = useRef(null);

  // This useEffect is used to detect if the user clicks outside the input field
  // If the user clicks outside the input field, the focus state is set to false
  // If the user clicks inside the input field, the focus state is set to true
  useEffect(() => {
    const addInputEvent = (e: any) => {
      if (addInput.current && !focus && addInput.current.contains(e.target)) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", addInputEvent);

    return () => {
      document.removeEventListener("mousedown", addInputEvent);
    };
  }, [focus]);

  const handleSubmit = () => {
    if (task.trim() === "") {
      toast({
        title: "Error",
        description: "Task cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    onAddTask(task);
    setTask("");
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        ref={addInput}
        flex={1}
        mr={2}
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.15)",
          borderRadius: "60px",
          width: "346px",
          height: focus ? "314px" : "45px",
          position: "relative",
          margin: 0,
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <Icon
        className="add-icon"
        as={MdAddCircle}
        onClick={handleSubmit}
        sx={{
          position: "absolute",
          bottom: "27px",
          right: "27px",
          fontSize: "50px",
          color: "#3B82F6",
          display: focus ? "block" : "none",
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default TaskForm;
