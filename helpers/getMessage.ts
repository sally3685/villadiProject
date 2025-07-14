export const getMessage = (bilingual: string, lang: "en" | "ar" = "en") => {
  const [enMsg, arMsg] = bilingual.split(" / ");
  return lang === "ar" ? arMsg : enMsg;
};
