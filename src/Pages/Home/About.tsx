import React from 'react';
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
          ? 'lorem lorem lorem'
          : `
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
        طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
        يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
        برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
        إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث
        ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين
        ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة،
        وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها
`}
      </div>
      <div className="text-center pb-8">
        <Button
          to="/about"
          title="المزيد"
          className="bg-primary text-white  rounded-lg px-20 py-2 mb-20 hover:text-white hover:bg-black duration-300"
        />
      </div>
    </div>
  );
};

export default About;
