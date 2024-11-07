import TopBar2 from '../../components/TopBar2';
import image from '../../assets/about.png';
import janzeer from '../../assets/janzzerBlue.png';
import Footer from '../../components/Footer';

export default function AboutUs() {
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
              الأكاديمية العربية{' '}
            </h1>
            <h2 className="text-primary text-4xl font-bold mb-4">
              للاتصالات اللاسلكية والاستغاثات البحرية
            </h2>
            <p className="font-bold text-gray-7 text-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-32 content-center items-stretch lg:mt-30 md:mt-20 mt-8">
          <div>
            <img src={image} alt="image" className="w-full" />
          </div>
          <div>
            <p className="font-bold text-gray-7 text-right text-2xl leading-10">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
              محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
              مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب
              تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال
              "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد
              في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم
              إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض
              العبارات الفكاهية إليها.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-primary font-bold text-2xl text-right mb-4 mt-20">
            ما هو "لوريم إيبسوم" ؟
          </h1>
          <p className="font-bold text-gray-7 text-right text-lg leading-10">
            لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
            إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
            مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
            كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم
            تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
            والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار
            رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
            لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس
            بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم
            إيبسوم.
          </p>
        </div>
      </div>

      <div className="my-16 w-full p-4 flex justify-center">
        <iframe
          className="md:w-2/4 w-full "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
        ></iframe>
        {/* <Video /> */}
      </div>
      <Footer footer />
    </>
  );
}
