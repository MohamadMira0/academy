import Footer from "../../components/Footer";
import TopBar2 from "../../components/TopBar2";
import image from '../../assets/background-home.svg';
import janzeer from '../../assets/janzeer.svg';
import pen from '../../assets/icons/pen.svg';
import time from '../../assets/icons/time.svg';
import image2 from '../../assets/about.png';
import span from "../../assets/spanBlog.svg"


export default function Blog() {
  return (<>
    <TopBar2/>
    <div className="">
      <div className="relative">
        <img
          src={image}
          className="w-screen h-auto max-h-[90vh] object-cover"
          alt="Background Image"
        />
        <img
          src={janzeer}
          className="absolute top-0 left-8 lg:h-[450px] md:h-[350px] sm:h-[250px] h-[150px] "
          alt="Foreground Image"
        />
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 flex flex-col font-[700] text-[66px] leading-[103px] text-center p-2 rounded-md">
          <span className="text-white text-5xl">
            عنوان المدونة
          </span>
        </div>
      </div>
    </div>
    <div className="container lg:px-16 md:px-8 px-3 mx-auto">
      <div className="flex flex-row-reverse items-center gap-10">
        <p className="flex items-center gap-2 text-text-gray text-lg">12/7/20224 <span><img src={time} alt={"img"} className="w-5" /></span> </p>
        <p className="flex items-center gap-2 text-text-gray text-lg"> أ.محمد عبدالرحمن <span><img src={pen} alt={"img"} className="w-5" /></span> </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-32 content-center items-stretch lg:mt-30 md:mt-20 mt-8">
          <div>
            <img src={image2} alt="image" className="w-full" />
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
        <p className="font-bold text-gray-7 text-right text-2xl lg:mt-20 mt-10">
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
        <p className="font-bold text-gray-7 text-right text-2xl lg:mt-20 mt-10">
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
        <div className="mb-20 mt-40 flex justify-center">
          <img  src={span} alt="span" />
        </div>
    </div>
    <Footer footer/>
  </>)
}