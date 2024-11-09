import TopBar2 from '../../components/TopBar2';
import image from '../../assets/about.png';
import janzeer from '../../assets/janzzerBlue.png';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function AboutUs() {
  const { lang } = useSelector((state: RootState) => state.language);

  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16">
        <div className="flex justify-end relative">
          <div className="absolute top-[-4rem] left-0">
            <img
              src={janzeer}
              alt="span"
              className="lg:h-[350px] md:h-[300px] sm:h-[250px] h-[250px]"
            />
          </div>
          <div className="w-10/12" dir="rtl">
            <h1 className="text-gold text-5xl font-bold mb-4">
              {lang === 'en' ? 'Arab Academy' : 'الأكاديمية العربية'}
            </h1>
            <h2 className="text-primary text-4xl font-bold mb-4">
              {lang === 'en'
                ? 'For radio communications and marine distresses'
                : 'للاتصالات اللاسلكية والاستغاثات البحرية'}
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-32 content-center items-stretch lg:mt-30 md:mt-20 mt-8">
          <div>
            <img src={image} alt="image" className="w-full" />
          </div>
          <div>
            <p className="font-bold text-gray-7 text-right text-2xl leading-10">
              {lang === 'en'
                ? `We are the "Academy of Radio Communications and Maritime Distress", a digital educational platform that provides educational services and visual explanations for the first time in the Arabic language for scientific materials for specialized certificates in maritime distress and safety, such as the General Class Radio Operator Certificate (GOC) in the depths of the seas and oceans, as well as the Restricted Class Radio Operator Certificate (ROC) according to the (GMDSS) system, in accordance with the International Convention on Standards of Training, Certification and Watchkeeping for Seafarers (STCW) to prepare specialized technical cadres in the field of navigation and marine officers and radio operators (radio officers) by experts in the field with more than fifteen years in the depths of the seas.                                       `
                : ` نحن "أكاديمية الاتصالات اللاسلكيه والاستغاثات البحريه" هي منصة تعليمية رقمية تقدم خدمات تعليميه وشروحات مرئية لاول مره باللغة العربية لمواد علمية لشهادات متخصصه فى الاستغاثه والسلامه البحريه من شهادة مشغل لاسلكي من الدرجة العامه (GOC) بأعماق البحار والمحيطات وايضا شهادة مشغل لاسلكي من الدرجة المقيده (ROC) وفقا لنظام (GMDSS) طبقا لإتفاقية الدولية لمعاييرالتدريب وإصدارالشهادات والمراقبه للبحاره (STCW) لإعداد كوادر فنية  متخصصه فى المجال من ضباط الملاحة و البحريين ومشغلي راديو اللاسلكي   (ضباط اللاسلكي ) على يد خبراء فى المجال اكثر من خمسة عشر عاما فى اعماق البحار 
`}
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 w-full p-4 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ilLgsOmi1UQ?si=OEb8JtR3N6D8eP3v"
          title="YouTube video player"
          frameorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Footer footer />
    </>
  );
}
