import "../styles/Mail.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack></ArrowBack>
          </IconButton>
          <IconButton>
            <ArchiveIcon fontSize="small"></ArchiveIcon>
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon fontSize="small"></ReportGmailerrorredIcon>
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small"></DeleteIcon>
          </IconButton>
          <span style={{ color: "lightgrey" }}> | </span>
          <IconButton>
            <MailOutlineIcon fontSize="small"></MailOutlineIcon>
          </IconButton>
          <IconButton>
            <AccessTimeIcon fontSize="small"></AccessTimeIcon>
          </IconButton>
          <IconButton>
            <AddTaskIcon fontSize="small"></AddTaskIcon>
          </IconButton>
          <span style={{ color: "lightgrey" }}> | </span>
          <IconButton>
            <DriveFileMoveIcon fontSize="small"></DriveFileMoveIcon>
          </IconButton>
          <IconButton>
            <LabelIcon fontSize="small"></LabelIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small"></MoreVertIcon>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMoreIcon fontSize="small"></UnfoldMoreIcon>
          </IconButton>
          <IconButton>
            <PrintIcon fontSize="small"></PrintIcon>
          </IconButton>
          <IconButton>
            <ExitToAppIcon fontSize="small"></ExitToAppIcon>
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important"></LabelImportantIcon>
          <p>Title</p>
          <p className="mail__time">10pm</p>
        </div>

        <div className="mail__message">
          <p>this is a test</p>
        </div>
      </div>
    </div>
  );
};
export default Mail;
