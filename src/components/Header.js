import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDropDown } from "@mui/icons-material";
import { IconButton } from "@mui/material";

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
        <SearchIcon></SearchIcon>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header_inputCaret"></ArrowDropDown>
      </div>
      <div className="header_right"></div>
    </div>
  );
};
export default Header;
