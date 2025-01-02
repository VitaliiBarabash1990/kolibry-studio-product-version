import {setRequestLocale} from 'next-intl/server';
import {Gallery} from '@/components/Gallery/Gallery';

type Props = {
  params: {locale: string};
};

export default function GalleryPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Gallery />
    </>
  );
}
