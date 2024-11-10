import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const About = () => {
  const { lang } = useSelector((state: RootState) => state.language);
  return (
    <div className="mb-8">
      <TitleWithLogo title={lang === 'en' ? 'Who we are' : 'من نحن'} />
      <div className="my-6 mx-6 text-center text-black font-[700] text-xl">
        {lang === 'en'
          ? `We are the "Academy of Radio Communications and Maritime Distress", a digital educational platform that provides educational services and visual explanations for the first time in the Arabic language for scientific materials for specialized certificates in maritime distress and safety, such as the General Class Radio Operator Certificate (GOC) in the depths of the seas and oceans, as well as the Restricted Class Radio Operator Certificate (ROC) according to the (GMDSS) system, in accordance with the International Convention on Standards of Training, Certification and Watchkeeping for Seafarers (STCW) to prepare specialized technical cadres in the field of navigation and marine officers and radio operators (radio officers) by experts in the field with more than fifteen years in the depths of the seas.                                       `
          : ` نحن "أكاديمية الاتصالات اللاسلكيه والاستغاثات البحريه" هي منصة تعليمية رقمية تقدم خدمات تعليميه وشروحات مرئية لاول مره باللغة العربية لمواد علمية لشهادات متخصصه فى الاستغاثه والسلامه البحريه من شهادة مشغل لاسلكي من الدرجة العامه (GOC) بأعماق البحار والمحيطات وايضا شهادة مشغل لاسلكي من الدرجة المقيده (ROC) وفقا لنظام (GMDSS) طبقا لإتفاقية الدولية لمعاييرالتدريب وإصدارالشهادات والمراقبه للبحاره (STCW) لإعداد كوادر فنية  متخصصه فى المجال من ضباط الملاحة و البحريين ومشغلي راديو اللاسلكي   (ضباط اللاسلكي ) على يد خبراء فى المجال اكثر من خمسة عشر عاما فى اعماق البحار 
`}
      </div>
      <div className="text-center pb-8">
        <Button
          to="/about"
          title={lang === 'en' ? 'More' : 'المزيد'}
          className="bg-primary text-white  rounded-lg px-20 py-2 mb-20 hover:text-white hover:bg-black duration-300"
        />
      </div>
    </div>
  );
};

export default About;
