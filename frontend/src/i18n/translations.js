// Central translation dictionary - one place for every string on the
// site, instead of scattering LABELS objects into each component.
// Add new keys here as more components get translated; components
// read them via useLanguage()'s t("section.key") helper.

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      learning: "Learning",
      admission: "Admission",
      gallery: "Gallery",
      healthSafety: "Health & Safety",
      toggle: "اقرأ بالعربية",
    },
    hero: {
      cta: "Register Your Interest",
      statYears1: "YEARS IN",
      statYears2: "EXPERIENCE",
      statRatio1: "TEACHER-TO-",
      statRatio2: "STUDENT",
      statRatio3: "RATIO",
      statSatisfaction1: "PARENT",
      statSatisfaction2: "SATISFACTION",
    },
    principal: {
      title: "A Message from the Nursery Principal",
      dearParents: "Dear Parents,",
      p1: "It is my great pleasure to welcome you to Kids Land Nursery and sincerely thank you for the trust you have placed in us.",
      p2: "Since 2004, we have been committed to providing a safe, nurturing, and inspiring environment where every child is valued, supported, and encouraged to reach their full potential. Our approach combines high-quality care and education in line with the EYFS framework and ADEK standards.",
      p3: "We believe every child is unique, and we respect their individual abilities, interests, and developmental needs. We also strive to nurture children who are proud of their Arabic language and national identity and guided by values of compassion, respect, and tolerance.",
      p4: "We believe that a strong partnership between families and the nursery is essential for children's success. Through trust, communication, and collaboration, we can give every child the best possible start in life.",
      p5: "We look forward to another year filled with learning, happiness, growth, and wonderful memories. Since 2004... Creating the Beginnings, Every Child Deserves. With our highest respect and appreciation,",
      signature: "Nursery Principal",
    },
    vision: {
      heading: "Our Vision",
      body: "To provide a world-class educational environment that nurtures and prepares a creative generation.",
    },
    mission: {
      heading: "Our Mission",
      body: "To nurture children based on the authentic values and principles of our community, develop their social communication skills, and instill strong moral values through a stimulating, child-centered environment that supports their growth and prepares them for future stages of education. We believe that creativity and innovation begin in the early years.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      learning: "التعلم",
      admission: "القبول",
      gallery: "المعرض",
      healthSafety: "الصحة والسلامة",
      toggle: "Read in English",
    },
    hero: {
      cta: "سجل اهتمامك",
      statYears1: "سنوات من",
      statYears2: "الخبرة",
      statRatio1: "نسبة المعلم",
      statRatio2: "إلى الطالب",
      statRatio3: "",
      statSatisfaction1: "رضا",
      statSatisfaction2: "أولياء الأمور",
    },
    principal: {
      title: "رسالة من مديرة الحضانة",
      dearParents: "أعزاءنا الأولياء،",
      p1: "يسعدني أن أرحب بكم في حضانة كيدز لاند، وأشكركم بصدق على الثقة التي منحتمونا إياها.",
      p2: "منذ عام 2004، ونحن ملتزمون بتوفير بيئة آمنة وحاضنة وملهمة يشعر فيها كل طفل بالتقدير والدعم، ويُشجَّع على الوصول إلى كامل إمكاناته. يجمع نهجنا بين الرعاية والتعليم عالي الجودة بما يتماشى مع إطار العمل EYFS ومعايير أديك.",
      p3: "نؤمن بأن كل طفل فريد من نوعه، ونحترم قدراته واهتماماته واحتياجاته النمائية الفردية. كما نسعى إلى تنشئة أطفال يعتزّون بلغتهم العربية وهويتهم الوطنية، ويسترشدون بقيم الرحمة والاحترام والتسامح.",
      p4: "نؤمن بأن الشراكة القوية بين الأسر والحضانة أمر أساسي لنجاح الأطفال. فمن خلال الثقة والتواصل والتعاون، يمكننا أن نمنح كل طفل أفضل بداية ممكنة في الحياة.",
      p5: "نتطلع إلى عام آخر مليء بالتعلم والسعادة والنمو والذكريات الجميلة. منذ عام 2004... نصنع البدايات التي يستحقها كل طفل. مع بالغ احترامنا وتقديرنا،",
      signature: "مديرة الحضانة",
    },
    vision: {
      heading: "رؤيتنا",
      body: "توفير بيئة تعليمية عالمية المستوى ترعى وتُعد جيلاً مبدعاً.",
    },
    mission: {
      heading: "رسالتنا",
      body: "تنشئة الأطفال على القيم والمبادئ الأصيلة لمجتمعنا، وتطوير مهاراتهم في التواصل الاجتماعي، وغرس القيم الأخلاقية الراسخة من خلال بيئة محفزة تتمحور حول الطفل، تدعم نموه وتُعدّه للمراحل التعليمية القادمة. نؤمن بأن الإبداع والابتكار يبدآن في السنوات الأولى.",
    },
  },
};

export default translations;
