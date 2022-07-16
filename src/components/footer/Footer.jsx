import React from "react";

function Footer() {
  return (
    <div className="p-3 w-100 bg-danger text-center text-light">
      Admin Dashboard - {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
