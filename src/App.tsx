import { useState } from "react";

import initialEmails, { Email } from "./data/emails";

import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Emails from "./components/Emails";

const getReadEmails = (emails: Email[]) =>
  emails.filter((email) => !email.read);

const getStarredEmails = (emails: Email[]) =>
  emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail: Email) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  function getFilteredEmails(): Array<Email> {
    let filteredEmails = emails;

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails);
    }

    if (currentTab === "starred") {
      filteredEmails = getStarredEmails(filteredEmails);
    }

    return filteredEmails;
  }

  return (
    <div className="app">
      <Header />

      <Nav
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />

      <Emails
        getFilteredEmails={getFilteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
    </div>
  );
}

export default App;
