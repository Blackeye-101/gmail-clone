import SidebarOption from "./SidebarOption";
import "../styles/Sidebar.css";
import { IconButton, Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large"></CreateIcon>}
        className="sidebar_compose"
      >
        Compose
      </Button>

      <SidebarOption
        Icon={<InboxIcon></InboxIcon>}
        title="Inbox"
        number={42}
        selected={true}
      ></SidebarOption>
      <SidebarOption
        Icon={<StarBorderIcon></StarBorderIcon>}
        title="Starred"
        number={42}
      ></SidebarOption>
      <SidebarOption
        Icon={<AccessTimeIcon></AccessTimeIcon>}
        title="Snoozed"
        number={42}
      ></SidebarOption>
      <SidebarOption
        Icon={<SendIcon></SendIcon>}
        title="Sent"
        number={42}
      ></SidebarOption>
      <SidebarOption
        Icon={<DescriptionIcon></DescriptionIcon>}
        title="Drafts"
        number={42}
      ></SidebarOption>
      <SidebarOption
        Icon={<ExpandMoreIcon></ExpandMoreIcon>}
        title="More"
      ></SidebarOption>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon></PersonIcon>
          </IconButton>
          <IconButton>
            <DuoIcon></DuoIcon>
          </IconButton>
          <IconButton>
            <PhoneIcon></PhoneIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
