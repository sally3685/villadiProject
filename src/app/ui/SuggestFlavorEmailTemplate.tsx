import * as React from "react";

interface EmailFlavorTemplateProps {
  userEmail: string;
  text: string;
  userName: string;
}
export function EmailFlavorTemplate({
  userEmail,
  text,
  userName,
  //   supportEmail = "support@ola.com"
}: EmailFlavorTemplateProps) {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        {/* <div style={logoContainerStyle}>
          <img
            src="https://villadi.com/villadiLogo.svg"
            alt="Villadi Logo"
            style={logoStyle}
          />
        </div> */}
        <h1 style={titleStyle}>New Flavor Suggestion</h1>
        <p style={subtitleStyle}>From Villadi Website</p>
      </div>

      <div style={contentStyle}>
        <p style={greetingStyle}>Hello Villadi Team,</p>
        <p style={messageStyle}>
          You've received a new flavor suggestion from{" "}
          <span style={userInfoStyle}>
            {userName} ({userEmail})
          </span>
          :
        </p>

        <div style={suggestionContainerStyle}>
          <div style={suggestionTextStyle}>"{text}"</div>
        </div>

        <div style={footerStyle}>
          <p style={footerTextStyle}>
            This suggestion was submitted on {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "0",
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  color: "#333",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "30px 20px",
  borderBottom: "1px solid #eaeaea",
  background: "linear-gradient(135deg, #f8f4e5 0%, #fff 100%)",
};

const logoContainerStyle: React.CSSProperties = {
  marginBottom: "15px",
};

const logoStyle: React.CSSProperties = {
  height: "50px",
  width: "auto",
};

const titleStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "8px",
  letterSpacing: "0.5px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#7f8c8d",
  margin: "0",
  fontWeight: "500",
};

const contentStyle: React.CSSProperties = {
  padding: "30px",
};

const greetingStyle: React.CSSProperties = {
  fontSize: "18px",
  marginBottom: "20px",
  color: "#2c3e50",
};

const messageStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "25px",
  color: "#34495e",
};

const userInfoStyle: React.CSSProperties = {
  fontWeight: "600",
  color: "#e74c3c",
};

const suggestionContainerStyle: React.CSSProperties = {
  backgroundColor: "#f9f9f9",
  borderLeft: "4px solid #e74c3c",
  padding: "20px",
  borderRadius: "0 8px 8px 0",
  marginBottom: "30px",
};

const suggestionTextStyle: React.CSSProperties = {
  fontStyle: "italic",
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#2c3e50",
};

const footerStyle: React.CSSProperties = {
  borderTop: "1px solid #eaeaea",
  paddingTop: "20px",
  marginTop: "20px",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#7f8c8d",
  textAlign: "center",
  marginBottom: "15px",
};

const contactStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#7f8c8d",
  textAlign: "center",
  fontStyle: "italic",
};
