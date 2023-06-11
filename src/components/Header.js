import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt="Gmail"
        />
      </div>
      <div className="header_middle">
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <TuneIcon className="header_inputCaret"></TuneIcon>
        </IconButton>
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutlineIcon></HelpOutlineIcon>
        </IconButton>
        <IconButton>
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>

        <Avatar></Avatar>
      </div>
    </div>
  );
};
export default Header;
