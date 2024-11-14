export interface ILocaleProps {
  params: Promise<{
    locale: string;
    vcardCode: string;
  }>;
}