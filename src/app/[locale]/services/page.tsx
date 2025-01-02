import {setRequestLocale} from 'next-intl/server';
import {AccordionServices} from '@/components/AccordionServices/AccordionServices';

type Props = {
  params: {locale: string};
};

export default function Services({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <AccordionServices />
    </>
  );
}
