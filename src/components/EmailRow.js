import "../styles/EmailRow.css";
import { useNavigate } from "react-router-dom";
import { IconButton, Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";
const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox style={{ color: "grey" }}></Checkbox>
        <IconButton>
          <StarOutlineIcon></StarOutlineIcon>
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon></LabelOutlinedIcon>
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};
export default EmailRow;
