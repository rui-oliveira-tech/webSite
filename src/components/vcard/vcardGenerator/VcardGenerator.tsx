import { generateRandownPerson } from "./randownPerson";
import { generateFriends } from "./friends";
import { generateJobs } from "./jobs";
import { generateCompany } from "./company";

export async function VcardGenerator(type: string): Promise<string> {
  const lastname = "Oliveira";
  const firstname = "Rui";

  switch (type) {
    case process.env.TYPE_RANDOWN_PERSON:
      return generateRandownPerson(lastname, firstname);
    case process.env.TYPE_FRIENDS:
      return generateFriends(lastname, firstname);
    case process.env.TYPE_JOBS:
      return generateJobs(lastname, firstname);
    case process.env.TYPE_COMPANY:
      return generateCompany(lastname, firstname);
    default:
      throw new Error(`Invalid vCard type: ${type}`);
  }
}
