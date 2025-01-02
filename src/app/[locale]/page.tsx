import {setRequestLocale} from 'next-intl/server';
import {Accordion} from '@/components/Accordion/Accordion';
import {Experience} from '@/components/Experience/Experience';
import {Master} from '@/components/Master/Master';
import {MyWork} from '@/components/MyWork/MyWork';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Experience />
      <Master />
      <MyWork />
      <Accordion />
    </>
  );
}
