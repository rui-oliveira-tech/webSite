import { supportedLngs } from "@/resource/lngs/lngs"


export async function generateStaticParams() {
    return supportedLngs.map((locale) => ({ locale }));
}