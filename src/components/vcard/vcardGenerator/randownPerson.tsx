import VCard from "vcard-creator";
import { links } from "@/resource/links";

export function generateRandownPerson(
  lastname: string,
  firstname: string
): string {
  const myVCard = new VCard();

  myVCard
    .addName(lastname, firstname, "", "", "")
    .addPhoneNumber(links.gsm.link, "PREF;WORK")
    .addSocial(
      links.facebook.link,
      links.facebook.name,
      links.facebook.showName
    )
    .addSocial(
      links.instagram.link,
      links.instagram.name,
      links.instagram.showName
    );

  return myVCard.toString();
}
