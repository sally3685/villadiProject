import * as React from "react";

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  color: "#333",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: "20px",
  borderBottom: "1px solid #eaeaea",
};

const titleStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2c3e50",
  marginBottom: "8px",
};

const subtitleStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#7f8c8d",
  margin: "0",
};

const contentStyle: React.CSSProperties = {
  padding: "20px 0",
};

const greetingStyle: React.CSSProperties = {
  fontSize: "18px",
  marginBottom: "20px",
};

const messageStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "30px",
};

const codeContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  margin: "30px 0",
};

const digitStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#3498db",
};

const expiryStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#7f8c8d",
  textAlign: "center",
  margin: "20px 0",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  backgroundColor: "#eaeaea",
  margin: "30px 0",
};

const footerTextStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#7f8c8d",
  lineHeight: "1.5",
  textAlign: "center",
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

const footerContainerStyle: React.CSSProperties = {
  borderTop: "1px solid #eaeaea",
  paddingTop: "20px",
  marginTop: "20px",
};

const flavorFooterTextStyle: React.CSSProperties = {
  ...footerTextStyle,
  marginBottom: "15px",
};

interface EmailTemplateProps {
  numbers?: string;
  userName?: string;
  userEmail?: string;
  text?: string;
  t: any;
}
export const EmailTemplatePass = ({ numbers, t }: EmailTemplateProps) => (
  <div style={containerStyle}>
    <div style={headerStyle}>
      <h1 style={titleStyle}>{t.EmailTemplatePass.title}</h1>
      <p style={subtitleStyle}>{t.EmailTemplatePass.subtitle}</p>
    </div>

    <div style={contentStyle}>
      <p style={greetingStyle}>{t.EmailTemplatePass.hello}</p>
      <p style={messageStyle}>{t.EmailTemplatePass.instruction}</p>

      <div style={codeContainerStyle}>
        {numbers?.split("").map((digit, index) => (
          <span key={index} style={digitStyle}>
            {digit}
          </span>
        ))}
      </div>

      <p style={expiryStyle}>{t.EmailTemplatePass.expire}</p>
      <div style={dividerStyle}></div>
      <p style={footerTextStyle}>{t.EmailTemplatePass.ignore}</p>
    </div>
  </div>
);

export const EmailTemplate = ({ numbers, userName, t }: EmailTemplateProps) => (
  <div style={containerStyle}>
    <div style={headerStyle}>
      <h1 style={titleStyle}>{t.EmailTemplate.title}</h1>
      <p style={subtitleStyle}>{t.EmailTemplate.subtitle}</p>
    </div>

    <div style={contentStyle}>
      <p style={greetingStyle}>
        {t.EmailTemplate.hello} {userName},
      </p>
      <p style={messageStyle}>{t.EmailTemplate.instructions}</p>

      <div style={codeContainerStyle}>
        {numbers?.split("").map((digit, index) => (
          <span key={index} style={digitStyle}>
            {digit}
          </span>
        ))}
      </div>

      <p style={expiryStyle}>{t.EmailTemplate.warning}</p>
      <div style={dividerStyle}></div>
      <p style={footerTextStyle}>{t.EmailTemplate.ignore}</p>
    </div>
  </div>
);

export const EmailFlavorTemplate = ({
  userEmail,
  text,
  userName,
  t,
}: EmailTemplateProps) => (
  <div style={containerStyle}>
    <div style={headerStyle}>
      <h1 style={titleStyle}>{t.EmailFlavorTemplate.title}</h1>
      <p style={subtitleStyle}>{t.EmailFlavorTemplate.subtitle}</p>
    </div>

    <div style={contentStyle}>
      <p style={greetingStyle}>{t.EmailFlavorTemplate.team}</p>
      <p style={messageStyle}>
        {t.EmailFlavorTemplate.message}{" "}
        <span style={userInfoStyle}>
          {userName} ({userEmail})
        </span>
        :
      </p>

      <div style={suggestionContainerStyle}>
        <div style={suggestionTextStyle}>"{text}"</div>
      </div>

      <div style={footerContainerStyle}>
        <p style={flavorFooterTextStyle}>
          {t.EmailFlavorTemplate.date} {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
);
