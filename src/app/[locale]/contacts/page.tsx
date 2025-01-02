import {Contacts} from '@/components/Contacts/Contacts';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function ContactsPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Contacts />
    </>
  );
}
