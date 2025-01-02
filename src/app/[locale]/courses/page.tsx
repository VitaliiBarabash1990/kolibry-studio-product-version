import TrainingCourses from '@/components/TrainingCourses/TrainingCourses';
import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function Courses({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <TrainingCourses />
    </>
  );
}
