import React from "react";
import "./footer.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { useAPI } from "../../context/getContext";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Footer() {
  const { latest5 } = useAPI();

  return (
    <>
      <div className="footer">
        <div className="footerCol1">
          <img className="footerLogo" src="/assets/logo.png" alt="" />
          <span className="footerDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed
            deserunt voluptas tenetur ipsum reprehenderit architecto veritatis
            nostrum ipsam, tempora sunt minus fugiat tempore ex neque quam. Nisi
            impedit laboriosam, eum in rerum nulla veniam nostrum? Praesentium
            eveniet aspernatur voluptate natus explicabo similique, officia
            totam debitis culpa excepturi expedita id labore nobis! Ipsum, in,
            sunt tempore quaerat laboriosam voluptatibus consequuntur natus
            minima quo totam a asperiores corrupti sit repudiandae. Enim
            blanditiis
          </span>
        </div>

        <div className="footerCol2">
          <span className="col2Title">Latest uploads</span>
          <hr className="latestUploadHr" />

          {latest5.map((latest5Item, i) => (
            <Link to={`/watch/${latest5Item?._id}`} className="link">
              <div index={i} key={i} className="col2Item">
                <span className="col2ItemTitle">{latest5Item?.title} </span>
                <span className="col2ItemUploadTime">
                  {format(latest5Item.createdAt)}{" "}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="footerCol3">
          <span className="col3Title">Services</span>
          <hr className="servicesHr" />
          <span className="col3Item">Web Development</span>
          <span className="col3Item">App development</span>
          <span className="col3Item">Blockchain</span>
          <span className="col3Item">Marketing</span>
          <span className="col3Item">Online Teaching</span>
        </div>

        <div className="footerCol4">
          <span className="col4Title">Get in touch</span>
          <hr className="GetInTouchHr" />
          <span className="col4Item">
            {" "}
            <LocalPhoneIcon /> +1 (123) 456-7890
          </span>
          <span className="col4Item">
            <MailIcon /> example@gmail.com
          </span>
          <span className="col4Item">
            {" "}
            <PublicIcon /> www.example.com
          </span>
          <span className="col4Item">
            {" "}
            <LocationOnIcon /> New Baneshwor,Kathmandu
          </span>

          <div className="col4SocialMedia">
            <TwitterIcon className="col4Icon" />
            <LinkedInIcon className="col4Icon" />
            <RedditIcon className="col4Icon" />
            <InstagramIcon className="col4Icon" />
            <GoogleIcon className="col4Icon" />
          </div>
        </div>
      </div>
      <span className="copyRightTxt">
        Copyright 2022 Netflix All rights reserved
      </span>
    </>
  );
}

export default Footer;
