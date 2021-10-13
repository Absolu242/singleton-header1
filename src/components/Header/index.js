import React from "react";
import "./header.styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-logo">
          <img src="/LogoWhite.png" alt="logo" />
        </div>

        <ul className="header-list">
          <li>
            <a href="#"> Tour </a>
          </li>
          <li>
            <a href="#"> Pricing </a>
          </li>
          <li>
            <a href="#"> Explore </a>
          </li>
          <li>
            <a href="#"> Community </a>
          </li>
        </ul>

        <div className="header-buttons">
          <button className="btn btn-primary">Join</button> or{" "}
          <button className="btn btn-secondary">Login</button>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main__left">
          <p>October 10 2021</p>
          <h1>A Better Way</h1>

          <p>
            Department your permission to use the information for the stated
            purpose. However, not providing certain information may result in
            the Department’s inability to provide you with the service you
            desire.
            <br /> <br />
            Department your permission to use the information for the stated
            purpose. However.
          </p>

          <button>Get Started</button>
        </div>

        <div className="header-main__right">
          <div className="card">
            <img className="card-image" src="/Photo.png" alt="blog post" />

            <div className="card-info">
              <div className="card-info__top">
                <p>NOVEMBER, 26</p> <p>LIFE</p>
              </div>
              <h2 className="card-info__title">Where are you really from ?</h2>
              <p className="card-info__exc">
                This I have produced as a scantling of Jack’s great eloquence
                and the force of his reasoning upon such abstruse matters
              </p>
              <button className="card-info__btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
