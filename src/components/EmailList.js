import "../styles/EmailList.css";
import { IconButton, Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox style={{ color: "grey" }}></Checkbox>
          <IconButton>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </IconButton>
          <IconButton>
            <RefreshIcon></RefreshIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon></ChevronLeftIcon>
          </IconButton>
          <IconButton>
            <ChevronRightIcon></ChevronRightIcon>
          </IconButton>
          <IconButton>
            <KeyboardHideIcon></KeyboardHideIcon>
          </IconButton>
          <IconButton>
            <SettingsIcon></SettingsIcon>
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections"></div>
    </div>
  );
};
export default EmailList;
