import VCard from "vcard-creator";
import { links } from "@/resource/links";

// Define the function for generating a company-related vCard
export function generateCompany(lastname: string, firstname: string): string {
  const myVCard = new VCard();

  myVCard
    .addName(lastname, firstname, "", process.env.PREFIX_COMPANY ?? "", "")
    .addCompany(process.env.NAME_COMPANY ?? "")
    .addJobtitle(process.env.TITLE_COMPANY ?? "")
    .addEmail(process.env.EMAIL_COMPANY ?? "")
    .addPhoneNumber(process.env.CELLPHONE_COMPANY ?? "", "PREF;WORK")
    .addAddress("Antwerpen", "Belgium")
    .addSocial(
      links.linkedin.link,
      links.linkedin.name,
      links.linkedin.showName
    )
    .addURL(links.website.link);

  return myVCard.toString();
}
