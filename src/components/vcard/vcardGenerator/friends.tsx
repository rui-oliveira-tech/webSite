import VCard from "vcard-creator";
import { links } from "@/resource/links";

// Define the function for generating a friend's vCard
export function generateFriends(lastname: string, firstname: string): string {
  const myVCard = new VCard();

  myVCard
    .addName(lastname, firstname, "", "", "")
    .addEmail(process.env.EMAIL ?? "")
    .addJobtitle(process.env.TITLE_FRIENDS ?? "")
    .addPhoneNumber(process.env.CELLPHONE ?? "", "PREF;CELL")
    .addPhoneNumber(links.gsm.link, "PREF;WORK")
    .addAddress("Antwerpen", "Belgium")
    .addSocial(
      links.facebook.link,
      links.facebook.name,
      links.facebook.showName
    )
    .addSocial(
      links.instagram.link,
      links.instagram.name,
      links.instagram.showName
    )
    .addSocial(
      links.linkedin.link,
      links.linkedin.name,
      links.linkedin.showName
    )
    .addSocial(links.github.link, links.github.name, links.github.showName)
    .addURL(links.website.link);

  return myVCard.toString();
}
