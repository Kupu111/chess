import React from "react";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1c1c1c",
      fontFamily: "'Montserrat', sans-serif",
      color: "#ccc",
      padding: "60px 80px 20px"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>
        <div>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 40px"
          }}>
            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Sign up</a></li>
            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Log in</a></li>
            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Play</a></li>
            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Train</a></li>
            <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Games</a></li>
          </ul>
          <p style={{ color: "#fff", fontSize: "14px" }}>Join a community that loves chess.</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ marginBottom: "30px" }}>
            <img
              src="../assets/images/BraINChess 1.png"
              alt="BrainChess Logo"
              style={{
                height: "32px",
                marginRight: "10px",
                verticalAlign: "middle"
              }}
            />
            <span style={{ fontSize: "16px", color: "#fff" }}>BRAINCHESS</span>
          </div>
          <div>
            <a href="#"><img src="../assets/images/icons8-instagram-48.png" alt="instagram Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
            <a href="#"><img src="../assets/images/icons8-telegram-app-48.png" alt="telegram Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
            <a href="#"><img src="../assets/images/icons8-vk-circled-48.png" alt="vk Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
            <a href="#"><img src="../assets/images/icons8-whatsapp-48.png" alt="whatsapp Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
            <a href="#"><img src="../assets/images/icons8-youtube-48.png" alt="youtube Logo" style={{ height: "20px", marginLeft: "10px" }} /></a>
          </div>
        </div>
      </div>
      <hr style={{ borderColor: "#333", margin: "40px 0" }} />
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
        color: "#888"
      }}>
        <p>All rights reserved © 2025</p>
        <p style={{ color: "#fff" }}>Made by Kirill Demidenko</p>
      </div>
    </footer>
  );
} 