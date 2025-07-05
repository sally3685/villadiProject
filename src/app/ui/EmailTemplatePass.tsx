import * as React from "react";

interface EmailTemplateProps {
  numbers: string;
}
export function EmailTemplatePass({
  numbers,
  //   supportEmail = "support@ola.com"
}: EmailTemplateProps) {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Password reset code </h1>
        <p style={subtitleStyle}>Villadi website</p>
      </div>

      <div style={contentStyle}>
        <p style={greetingStyle}>Hello ,</p>
        <p style={messageStyle}>
          Please use the following code to set a new password :
        </p>

        <div style={codeContainerStyle}>
          {numbers.split("").map((digit, index) => (
            <span key={index} style={digitStyle}>
              {digit}
            </span>
          ))}
        </div>

        <p style={expiryStyle}>This code will expire in 1 hour.</p>

        <div style={dividerStyle}></div>

        <p style={footerStyle}>
          If you didn't request this code, please ignore this email
        </p>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
  textAlign: "center" as const,
  paddingBottom: "20px",
  borderBottom: "1px solid #eaeaea",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "8px",
};

const subtitleStyle = {
  fontSize: "16px",
  color: "#7f8c8d",
  margin: "0",
};

const contentStyle = {
  padding: "20px 0",
};

const greetingStyle = {
  fontSize: "18px",
  marginBottom: "20px",
};

const messageStyle = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "30px",
};

const codeContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  margin: "30px 0",
};

const digitStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#3498db",
};

const expiryStyle = {
  fontSize: "14px",
  color: "#7f8c8d",
  textAlign: "center" as const,
  margin: "20px 0",
};

const dividerStyle = {
  height: "1px",
  backgroundColor: "#eaeaea",
  margin: "30px 0",
};

const footerStyle = {
  fontSize: "14px",
  color: "#7f8c8d",
  lineHeight: "1.5",
  textAlign: "center" as const,
};

const linkStyle = {
  color: "#3498db",
  textDecoration: "none",
};
