// import { DeleteButtonStyled } from "../../styles";
import taskStore from "../../stores/taskStore";

const DeleteTask = ({ taskId }) => {
  return (
    <DeleteButtonStyled onClick={() => taskStore.DeleteTask(taskId)}>
      DELETE
    </DeleteButtonStyled>
  );
};
export default DeleteTask;
