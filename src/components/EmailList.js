import { useState, useEffect } from "react";

import "../styles/EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { IconButton, Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { db } from "../firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

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

      <div className="emailList__sections">
        <Section
          Icon={<InboxIcon></InboxIcon>}
          title={"Primary"}
          color="#c04b37"
          selected={true}
        ></Section>
        <Section
          Icon={<PeopleIcon></PeopleIcon>}
          title={"Social"}
          color="#1a73e8"
        ></Section>
        <Section
          Icon={<LocalOfferIcon></LocalOfferIcon>}
          title={"Promotions"}
          color="green"
        ></Section>
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
          return (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            ></EmailRow>
          );
        })}
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test,this is a test,this is a test,this is a test,this is a test,this is a test"
          time="12am"
        ></EmailRow>
        <EmailRow
          title="Test"
          subject="Testing"
          description="this is a test"
          time="12am"
        ></EmailRow>
      </div>
    </div>
  );
};
export default EmailList;
