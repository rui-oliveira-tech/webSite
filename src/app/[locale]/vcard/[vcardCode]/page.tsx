import Vcard from "@/components/vcard/Vcard";
import FadeIn from "@/components/fadeIn/FadeIn";

import { ILocaleProps } from "@/models/ILocaleProps";

export default async function VcardPage(props: ILocaleProps) {
  const params = await props.params;
  return (
    <FadeIn type="fast">
      <Vcard {...params} />
    </FadeIn>
  );
}
