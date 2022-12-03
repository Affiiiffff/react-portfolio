import React from "react";

export default function Footer() {
  return (
    <div className="d-flex justify-content-center gap-20">
      <a href="mailto:example@test.com">
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="github.com/">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="linkedin.com/">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}
