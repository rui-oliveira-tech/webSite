export const links = {
  facebook: { name: "facebook", showName: "RuiOliveira.Electrician", link: "https://www.facebook.com/RuiOliveira.Electrician/" },
  instagram: { name: "instagram", showName: "RuiOliveira_Electrician", link: "https://www.instagram.com/RuiOliveira_Electrician/" },
  linkedin: { name: "linkedin", showName: "RuiOliveira-Electrician", link: "https://www.linkedin.com/in/RuiOliveira-Electrician/" },
  github: { name: "github", showName: "RuiOliveira-Electrician", link: "https://github.com/RuiOliveira-Electrician/" },
  whatsapp: { name: "whatsapp", showName: "", link: "https://api.whatsapp.com/send/?phone=32474127175&text&type=phone_number&app_absent=0" },
  mail: { name: "mail", showName: "hire@rui-oliveira.com", link: "mailto:hire@rui-oliveira.com" },
  website: { name: "website", showName: "Rui-oliveira.com", link: "https://www.rui-oliveira.com/" },
  gsm: { name: "gsm", showName: "+32474127175", link: "+32474127175" }
};

export function getType({ type }) {
  switch (type) {
    case "face":
      return "Facebook";
    case "insta":
      return "Instagram";
    case "linkedin":
      return "Linkedin";
    case "github":
      return "Github";
    case "google":
      return "Google";
    case "mail":
      return "Mail";
    case "vdab":
      return "VDAB";
    case "twitter":
      return "Twitter";
    default:
      return "other";
  }
}