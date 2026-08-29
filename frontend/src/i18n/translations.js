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
    footer: {
      name: "Kids Land Nursery", description: "Providing a warm, caring, and inspiring environment for your little ones to learn and grow.", quickLinks: "Quick Links", programs: "Programs", contactUs: "Contact Us", letsConnect: "Let's Connect", location: "Al Ain, Abu Dhabi, United Arab Emirates", phone: "0503222033 / 0544556479 / 0562999771", copyright: "© 2024 Kids Land Nursery. All rights reserved.",
    },
    homeAbout: {
      label: "ABOUT US", description1: "At Kids Land Nursery, we believe childhood is a time of wonder, discovery and limitless possibility.", description2: "Our nurturing environment, enriched curriculum and caring educators help every child build the confidence and skills for a brighter future.", feature1: "Child-centered approach", feature2: "Focus on social, emotional & cognitive development", feature3: "Strong parent partnership", learnMore: "Learn More About Us",
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
      p1: "It is my great pleasure to welcome you to Kids Land Nursery. I would also like to express my sincere appreciation for the trust you have placed in us—a trust we deeply value and regard as both a responsibility and a mission.",
      p2: "Since the establishment of Kids Land Nursery in 2004, we have believed that the early years of a child's life lay the foundation for their personality, shape their values, and mark the beginning of their lifelong learning journey. For more than two decades, we have been committed to providing a safe, inspiring, and nurturing learning environment that combines exceptional care, high-quality education, and internationally recognized best practices in early childhood education, in alignment with the Early Years Foundation Stage (EYFS) framework and the standards of the Abu Dhabi Department of Education and Knowledge (ADEK).",
      p3: "We believe that every child is unique, with their own abilities, interests, and individual way of learning. Therefore, we respect each child's individuality, identify their strengths, and empower them to grow with confidence in an environment that embraces their personality and responds to their developmental needs, enabling them to reach their full potential.",
      p4: "We are equally committed to nurturing children who are proud of the Arabic language, deeply connected to their national identity, and guided by authentic values inspired by the teachings of Islam, including compassion, respect, and tolerance. We strive to help them grow into responsible individuals who cherish their homeland, take pride in its leadership, and contribute positively to their community.",
      p5: "We firmly believe that a child's success begins with a genuine partnership between the family and the nursery—one built on trust, open communication, and collaboration. Together, we can create a rich educational experience and provide children with a strong foundation for a bright and successful future.",
      p6: "We pray that this academic year will be filled with success, happiness, and blessings, and that Kids Land Nursery will continue to be a second home where children are nurtured with love, learn with confidence, and create joyful memories that will last a lifetime.",
      p7: "Since 2004... Creating the Beginnings, Every Child Deserves.",
      p8: "With our highest respect and appreciation,",
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
    about: {
      heroTitle: "A Place to Learn, Play and Grow",
      heroDescription:
        "We believe childhood is a time of wonder, discovery and limitless possibility. Our nurturing environment helps every child build the confidence and skills for a brighter future.",
      whyTitle: "Why Do Parents Choose Kids Land Nursery?",
      whyP1:
        "For more than two decades, Kids Land Nursery has earned the trust of families—not only when they first enroll their children, but also as they continue to choose us for each new stage of their children's early learning journey.",
      whyP2:
        "Parents choose us because we believe that a child deserves more than simply a safe place. Every child deserves a nurturing learning environment that understands their individual needs, celebrates who they are, and helps them grow, learn, and develop with confidence.",
      valuesTitle: "Our Values",
      values: {
        creativity: {
          title: "Creativity",
          text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
        },
        continuousLearning: {
          title: "Continuous Learning",
          text: "Fostering a love for exploration and learning while developing children's academic and social skills.",
        },
        communication: {
          title: "Communication",
          text: "Teaching children effective social communication skills and promoting mutual respect.",
        },
        respect: {
          title: "Respect",
          text: "Instilling values of respect and appreciation for themselves and others.",
        },
        safety: {
          title: "Safety",
          text: "Providing a safe, secure, and reassuring environment that ensures children's comfort and well-being.",
        },
        collaboration: {
          title: "Collaboration",
          text: "Encouraging teamwork and cooperation among children to develop their social skills.",
        },
        excellence: {
          title: "Excellence",
          text: "Striving to achieve the highest standards of quality in education and care.",
        },
      },
      eyfsTitle: "EYFS Curriculum at Kids Land Foundation",
      eyfsDescription:
        "Kids Land Foundation follows the Early Years Foundation Stage (EYFS) framework, providing a safe, stimulating, and inclusive environment where children learn through play, exploration, and hands-on experiences, while supporting their individual needs and holistic development.",
      curriculum: {
        uniqueChild: {
          title: "Every Child is Unique",
          text: "We respect each child's abilities, interests, and individual needs.",
        },
        positiveRelationships: {
          title: "Positive Relationships",
          text: "We build secure, respectful, and supportive relationships with children and families.",
        },
        enablingEnvironments: {
          title: "Enabling Environments",
          text: "We provide safe and engaging environments that encourage exploration and discovery.",
        },
        learningDevelopment: {
          title: "Learning and Development",
          text: "We offer meaningful experiences that support children's overall development.",
        },
      },
      teamTitle: "Our Team",
      teamDescription:
        "At Kids Land Nursery, we believe that quality education and care begin with a qualified, specialized, and well-trained team working together to provide every child with a safe, supportive, and stimulating environment.",
      team: {
        leadership: "Leadership",
        nurseryDirector: "Nursery Director",
        assistantDirector: "Assistant Director",
        educationalStaff: "Educational Staff",
        qualifiedTeachers: "Qualified Teachers",
        teachingAssistants: "Teaching Assistants",
        specialists: "Specialists & Coordination",
        healthSafetyOfficer: "Health & Safety Officer",
        curriculumCoordinator: "Curriculum Coordinator",
        inclusionCoordinator: "Inclusion Coordinator",
        childProtectionCoordinator: "Child Protection Coordinator",
        supportLogistics: "Support & Logistics",
        cleaningStaff: "Cleaning Staff",
        authorizedDrivers: "Authorized Drivers",
        busSupervisors: "Bus Supervisors",
        busDriver: "Bus Driver",
      },
      servicesTitle: "Our Services",
      servicesDescription:
        "At Kids Land Nursery, we provide a range of services designed to support children and families throughout the year, ensuring a safe, enriching, and supportive early learning experience.",
      services: {
        schoolTransportation: "School Transportation",
        summerCamp: "Summer Camp",
        winterCamp: "Winter Camp",
        speechLanguageSupport: "Speech & Language Support",
        additionalSupport: "Additional Support Services",
      },
      facilitiesTitle: "Nursery Facilities",
      facilities: {
        library: {
          title: "Library",
          description:
            "A cozy space filled with books and stories. It encourages imagination, curiosity, and a love for reading.",
        },
        classrooms: {
          title: "Classrooms",
          description:
            "Bright, engaging rooms equipped with age-appropriate learning resources to support cognitive and social development.",
        },
        outdoorGarden: {
          title: "Outdoor Garden",
          description:
            "A natural space where children can explore and play. It develops curiosity and helps children connect with nature.",
        },
        riskyPlayArea: {
          title: "Risky Play Area",
          description:
            "A safe space where children can try new challenges. It builds confidence, independence, and problem-solving skills.",
        },
        uaeIdentityRoom: {
          title: "UAE National Identity Room",
          description:
            "A special space to discover UAE culture, heritage, and traditions. It builds pride, respect, and a strong sense of belonging.",
        },
        firstAidRoom: {
          title: "First Aid Room",
          description:
            "A safe and caring space for immediate support when needed. It helps ensure children's health, safety, and well-being.",
        },
        napRoom: {
          title: "Nap Room",
          description:
            "A calm and comfortable space for rest and relaxation. It helps children recharge and feel safe and refreshed.",
        },
        constructionRoom: {
          title: "Construction Room",
          description:
            "A fun space for building, designing, and creating. It develops creativity, planning, and fine motor skills.",
        },
        messyPlayArea: {
          title: "Messy Play Area",
          description:
            "A creative space for hands-on and sensory activities. It encourages exploration, creativity, and self-expression.",
        },
        theatre: {
          title: "Theatre",
          description:
            "A creative space for storytelling and performances. It builds confidence, communication, and creativity.",
        },
      },
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
    footer: {
      name: "حضانة كيدز لاند", description: "نوفّر بيئة دافئة ومحبة وملهمة تساعد أطفالكم على التعلّم والنمو.", quickLinks: "روابط سريعة", programs: "البرامج", contactUs: "تواصل معنا", letsConnect: "لنتواصل", location: "العين، أبوظبي، الإمارات العربية المتحدة", phone: "0503222033 / 0544556479 / 0562999771", copyright: "© 2024 حضانة كيدز لاند. جميع الحقوق محفوظة.",
    },
    homeAbout: {
      label: "من نحن", description1: "في حضانة كيدز لاند، نؤمن بأن الطفولة وقت للدهشة والاكتشاف والإمكانات اللامحدودة.", description2: "بيئتنا الداعمة ومنهجنا الغني ومربياتنا المحبات تساعد كل طفل على بناء الثقة والمهارات لمستقبل أكثر إشراقًا.", feature1: "منهج يركز على الطفل", feature2: "التركيز على النمو الاجتماعي والعاطفي والمعرفي", feature3: "شراكة قوية مع أولياء الأمور", learnMore: "اعرف المزيد عنا",
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
      dearParents: "أولياء الأمور الكرام،",
      p1: "يسعدني جدًا أن أرحب بكم في حضانة كيدز لاند. كما أود أن أعرب عن خالص تقديري لثقتكم الغالية بنا، وهي ثقة نعتز بها ونعتبرها مسؤولية ورسالة في آنٍ واحد.",
      p2: "منذ تأسيس حضانة كيدز لاند عام ٢٠٠٤، ونحن نؤمن بأن السنوات الأولى من حياة الطفل تُرسّخ شخصيته، وتُشكّل قيمه، وتضع الأساس لرحلته التعليمية مدى الحياة. وعلى مدى أكثر من عقدين من الزمن، التزمنا بتوفير بيئة تعليمية آمنة وملهمة وداعمة، تجمع بين الرعاية المتميزة والتعليم عالي الجودة، وتستند إلى أفضل الممارسات المعترف بها دوليًا في مجال تعليم الطفولة المبكرة، بما يتماشى مع إطار مرحلة التأسيس للسنوات المبكرة (EYFS) ومعايير دائرة التعليم والمعرفة في أبو ظبي (ADEK).",
      p3: "ونؤمن بأن كل طفل فريد من نوعه، له قدراته واهتماماته وأسلوبه الخاص في التعلم. لذلك، نحرص على احترام فردية كل طفل، والتعرف إلى نقاط قوته، وتمكينه من النمو بثقة في بيئة تحتضن شخصيته وتستجيب لاحتياجاته النمائية، بما يساعده على تحقيق أقصى إمكاناته.",
      p4: "كما نحرص على تنشئة أطفال يعتزون بلغتهم العربية، ويرتبطون ارتباطًا وثيقًا بهويتهم الوطنية، ويسترشدون بالقيم الأصيلة المستوحاة من تعاليم الإسلام، بما فيها الرحمة والاحترام والتسامح. ونسعى جاهدين إلى مساعدتهم على أن يصبحوا أفرادًا مسؤولين، يعتزون بوطنهم ويفخرون بقيادته، ويسهمون بصورة إيجابية في مجتمعهم.",
      p5: "ونؤمن إيمانًا راسخًا بأن نجاح الطفل يبدأ بشراكة حقيقية بين الأسرة والحضانة؛ شراكة تقوم على الثقة، والتواصل المفتوح، والتعاون المستمر. ومعًا، نستطيع أن نصنع تجربة تعليمية ثرية، ونوفر لأطفالنا أساسًا متينًا لمستقبل مشرق وناجح.",
      p6: "نسأل الله أن يكون هذا العام الدراسي حافلًا بالنجاح والسعادة والبركات، وأن تظل حضانة كيدز لاند بيتًا ثانيًا لأطفالنا، حيث يُرعى الأطفال بحب، ويتعلمون بثقة، ويصنعون ذكريات سعيدة تدوم مدى العمر.",
      p7: "منذ عام ٢٠٠٤... نصنع البدايات التي يستحقها كل طفل.",
      p8: "مع خالص الاحترام والتقدير،",
      signature: "مديرة الحضانة",
    },
    vision: {
      heading: "رؤيتنا",
      body: "توفير أجواء تربوية بمقاييس عالمية لإعداد جيل مبدع.",
    },
    mission: {
      heading: "مهمتنا",
      body: "تنشئة الأطفال على أسس ومبادئ المجتمع الأصيلة، وإتقان فنون التواصل الاجتماعي، وتعميق القيم السامية من خلال بيئة محفزة ومخصصة لاحتضان الطفل، تؤهلهم لمراحل التعليم الأساسي في المستقبل. نؤمن بأن الإبداع والابتكار يبدأ من هذه المرحلة.",
    },
    about: {
      heroTitle: "مكان للتعلم واللعب والنمو",
      heroDescription:
        "نؤمن بأن الطفولة هي وقت الدهشة والاكتشاف والإمكانيات اللامحدودة. بيئتنا الحاضنة تساعد كل طفل على بناء الثقة والمهارات لمستقبل أكثر إشراقًا.",
      whyTitle: "لماذا يختارنا أولياء الأمور؟",
      whyP1:
        "على مدى أكثر من عقدين، حظيت حضانة أرض الأطفال بثقة العديد من الأسر، ليس فقط لتسجيل أطفالهم معنا، بل للاستمرار في اختيارنا مع كل مرحلة جديدة من رحلتهم التعليمية.",
      whyP2:
        "يختارنا أولياء الأمور لأننا نؤمن بأن الطفل يستحق أكثر من مجرد مكان آمن؛ يستحق بيئة تعليمية تحتضنه، وتفهم احتياجاته، وتساعده على النمو والتعلم بثقة.",
      valuesTitle: "قيمنا",
      values: {
        creativity: {
          title: "الإبداع",
          text: "تشجيع الأطفال على التفكير خارج الصندوق وتعزيز مهاراتهم الفنية والإبداعية.",
        },
        continuousLearning: {
          title: "التعلم المستمر",
          text: "تعزيز حب الاستكشاف والتعلم، وتنمية مهاراتهم الأكاديمية والاجتماعية.",
        },
        communication: {
          title: "التواصل",
          text: "تعليم الأطفال فنون التواصل الاجتماعي والاحترام المتبادل.",
        },
        respect: {
          title: "الاحترام",
          text: "تعزيز قيم الاحترام والتقدير للذات وللآخرين.",
        },
        safety: {
          title: "الأمان",
          text: "توفير بيئة آمنة ومطمئنة للأطفال تضمن لهم الراحة والهدوء.",
        },
        collaboration: {
          title: "التعاون",
          text: "تشجيع العمل الجماعي والتعاون بين الأطفال لتنمية مهاراتهم الاجتماعية.",
        },
        excellence: {
          title: "التميز",
          text: "السعي لتحقيق أعلى معايير الجودة في التعليم والرعاية.",
        },
      },
      eyfsTitle: "منهج EYFS في مؤسسة أرض الأطفال",
      eyfsDescription:
        "تتبع مؤسسة أرض الأطفال للتعليم في مرحلة الطفولة المبكرة منهج السنوات المبكرة (EYFS)، الذي يهدف إلى توفير بيئة آمنة ومحفزة تساعد الأطفال على التعلم من خلال اللعب والاستكشاف والتجارب العملية، مع مراعاة احتياجات وقدرات كل طفل ودعم نموه الشامل.",
      curriculum: {
        uniqueChild: {
          title: "كل طفل مميز",
          text: "نراعي قدرات واهتمامات واحتياجات كل طفل.",
        },
        positiveRelationships: {
          title: "العلاقات الإيجابية",
          text: "نبني علاقات آمنة وداعمة مع الأطفال وأسرهم.",
        },
        enablingEnvironments: {
          title: "بيئة تعليمية محفزة",
          text: "نوفر بيئة آمنة وشاملة تشجع على الاستكشاف والتجربة.",
        },
        learningDevelopment: {
          title: "التعلم والتطور",
          text: "نقدم خبرات متنوعة تدعم نمو الطفل في جميع المجالات.",
        },
      },
      teamTitle: "فريق العمل",
      teamDescription:
        "في حضانة أرض الأطفال، نؤمن بأن جودة التعليم والرعاية تبدأ من فريق عمل مؤهل، متخصص، ومدرب، يعمل بروح الفريق لضمان توفير بيئة آمنة وداعمة ومحفزة لكل طفل.",
      team: {
        leadership: "الإدارة",
        nurseryDirector: "مديرة الحضانة",
        assistantDirector: "مساعدة المديرة",
        educationalStaff: "الكادر التعليمي",
        qualifiedTeachers: "معلمات مؤهلات",
        teachingAssistants: "مساعدات معلمات",
        specialists: "المختصون والمنسقون",
        healthSafetyOfficer: "مسؤول الصحة والسلامة",
        curriculumCoordinator: "منسق المنهاج",
        inclusionCoordinator: "منسق الدمج",
        childProtectionCoordinator: "منسق حماية الطفل",
        supportLogistics: "الدعم واللوجستيات",
        cleaningStaff: "عاملات النظافة",
        authorizedDrivers: "سائقون مصرح لهم",
        busSupervisors: "مشرفات الحافلات",
        busDriver: "سائق الحافلة",
      },
      servicesTitle: "خدماتنا",
      servicesDescription:
        "في حضانة أرض الأطفال، نقدم مجموعة من الخدمات المصممة لدعم الأطفال والأسر على مدار العام، وتوفير تجربة تعليمية آمنة وغنية وداعمة في مرحلة الطفولة المبكرة.",
      services: {
        schoolTransportation: "خدمة النقل المدرسي",
        summerCamp: "البرنامج الصيفي",
        winterCamp: "البرنامج الشتوي",
        speechLanguageSupport: "دعم النطق واللغة",
        additionalSupport: "خدمات الدعم الإضافية",
      },
      facilitiesTitle: "مرافق الحضانة",
      facilities: {
        library: {
          title: "المكتبة",
          description:
            "مساحة دافئة مليئة بالكتب والقصص، تشجع على الخيال وحب القراءة والاستكشاف.",
        },
        classrooms: {
          title: "الفصول الدراسية",
          description:
            "فصول مضيئة ومجهزة بوسائل تعليمية مناسبة لكل عمر، تدعم النمو المعرفي والاجتماعي.",
        },
        outdoorGarden: {
          title: "الحديقة الخارجية",
          description:
            "مساحة طبيعية يستكشف فيها الأطفال ويلعبون، وتنمي فضولهم وارتباطهم بالطبيعة.",
        },
        riskyPlayArea: {
          title: "منطقة اللعب والمخاطرة المحسوبة",
          description:
            "مساحة آمنة يجرب فيها الأطفال تحديات جديدة، تبني الثقة والاستقلالية ومهارات حل المشكلات.",
        },
        uaeIdentityRoom: {
          title: "غرفة الهوية الوطنية الإماراتية",
          description:
            "مساحة خاصة لاكتشاف ثقافة وتراث دولة الإمارات، تعزز الفخر والانتماء والاحترام.",
        },
        firstAidRoom: {
          title: "غرفة الإسعافات الأولية",
          description:
            "مساحة آمنة ومريحة لتقديم الدعم الفوري عند الحاجة، لضمان صحة الأطفال وسلامتهم.",
        },
        napRoom: {
          title: "غرفة النوم",
          description:
            "مساحة هادئة ومريحة للراحة والاسترخاء، تساعد الأطفال على استعادة نشاطهم والشعور بالأمان.",
        },
        constructionRoom: {
          title: "غرفة البناء والإنشاء",
          description:
            "مساحة ممتعة للبناء والتصميم والابتكار، تنمي الإبداع والتخطيط والمهارات الحركية الدقيقة.",
        },
        messyPlayArea: {
          title: "منطقة اللعب الحسي",
          description:
            "مساحة إبداعية للأنشطة الحسية العملية، تشجع على الاستكشاف والإبداع والتعبير عن الذات.",
        },
        theatre: {
          title: "المسرح",
          description:
            "مساحة إبداعية لسرد القصص والتمثيل والعروض، تبني الثقة ومهارات التواصل والإبداع.",
        },
      },
    },
  },
};

export default translations;
