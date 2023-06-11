import SidebarOption from "./SidebarOption";
import "../styles/Sidebar.css";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";

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
    </div>
  );
};
export default Sidebar;
