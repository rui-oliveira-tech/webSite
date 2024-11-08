import VCard from "vcard-creator";
import { links } from "@/resource/links";

// Define the function for generating a job-related vCard
export function generateJobs(lastname: string, firstname: string): string {
  const myVCard = new VCard();

  myVCard
    .addName(lastname, firstname, "", "🧑‍🔧 Sr. ", "")
    .addJobtitle("⚡ Industrial Electrician ⚡")
    .addEmail(links.mail.link)
    .addPhoneNumber(links.gsm.link, "PREF;WORK")
    .addAddress("Antwerpen", "Belgium")
    .addSocial(
      links.linkedin.link,
      links.linkedin.name,
      links.linkedin.showName
    )
    .addSocial(links.github.link, links.github.name, links.github.showName)
    .addURL(links.website.link);

  return myVCard.toString();
}
