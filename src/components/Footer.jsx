import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-grey-lighter">
      <div className="content has-text-centered">
        <p>
          <strong>repArep.com</strong> - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
