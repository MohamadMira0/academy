import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import image1 from '../../assets/courses/Group 446.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function Institute() {
  const { lang } = useSelector((state: RootState) => state.language);
  return (
    <div className="mb-20">
      <TitleWithLogo
        title={lang === 'en' ? 'Apply to the institute' : 'التقديم بالمعهد'}
      />
      <div className="flex flex-row-reverse flex-wrap-reverse container justify-center mx-auto lg:justify-between gap-4 lg:px-16 md:px-8 px-3">
        <div className="text-right lg:w-3/5  grid items-center gap-4">
          <h3 className="text-primary font-bold text-2xl">عنوان</h3>
          <p className="text-text-gray text-lg">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها.{' '}
          </p>
          <div>
            <Button
              to="/institute"
              className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title={lang === 'en' ? 'join us' : 'انضم الينا'}
            />
          </div>
        </div>
        <div className="flex lg:justify-start justify-center w-[276px]">
          <img className="w-full" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}
