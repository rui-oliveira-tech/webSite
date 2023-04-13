export default function getLink(type) {
  switch (type) {
    case "facebook":
      return "https://www.facebook.com/RuiOliveira.Electrician/";
    case "instagram":
      return "https://www.instagram.com/RuiOliveira_Electrician/";
    case "linkedin":
      return "https://www.linkedin.com/in/RuiOliveira-Electrician/";
    case "github":
      return "https://github.com/RuiOliveira-Electrician/";
    case "whatsapp":
      return "https://api.whatsapp.com/send/?phone=32474127175&text&type=phone_number&app_absent=0";
    case "mail":
      return "mailto:hire@rui-oliveira.com";
    /*  case "google":
     return "Google";
      case "vdab":
     return "VDAB";
   case "twitter":
     return "Twitter"; */
    default:
      return "https://www.rui-oliveira.com/";
  }
}

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