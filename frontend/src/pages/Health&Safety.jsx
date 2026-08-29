import { useEffect } from "react";
import { HeartPulse, ShieldCheck, Sparkles, LockKeyhole, Flame, BriefcaseMedical, GraduationCap, Pill, Siren, Bus, BadgeCheck, Handshake, Baby, Users, HeartHandshake } from "lucide-react";
import "./Health&Safety.css";
import { useLanguage } from "../context/LanguageContext";

const safetyIcons = [ShieldCheck, HeartPulse, Sparkles, LockKeyhole, Flame, BriefcaseMedical, GraduationCap, Pill, Siren, Bus, BadgeCheck, Handshake];
const safetyColors = ["purple", "green", "yellow", "pink", "red", "cyan", "beige", "yellow", "blue", "pink", "green", "yellow"];
const protectionIcons = [Baby, ShieldCheck, HeartHandshake, Users];
const protectionClasses = ["protection-yellow", "protection-purple", "protection-green", "protection-pink"];

const content = {
  en: {
    hero: "Health And Safety Measures",
    intro: "Maintaining and protecting the health and safety of our children and staff is a fundamental part of daily nursery life. We are committed to providing a safe, healthy, and supportive environment where children can learn, play, explore, and grow with confidence.",
    protection: "Child Protection",
    protectionIntro: "At Kids Land Nursery, children’s safety, protection, and wellbeing are at the heart of everything we do. We are committed to providing a safe, respectful, and nurturing environment where every child is protected from abuse, neglect, and harm.",
    safety: [
      ["Health & Safety Officer", "A dedicated officer oversees health and safety procedures, potential risks, and preventive and emergency response measures."],
      ["Health & Hygiene", "We follow strict health and hygiene procedures to help prevent illness and infection."],
      ["Cleaning & Sanitization", "Daily and regular cleaning and sanitization are carried out throughout classrooms, play areas, bathrooms, and shared facilities."],
      ["Safe & Secure Environment", "Classrooms and play areas are equipped with fire alarms and CCTV systems, with appropriate privacy and child protection practices."],
      ["Fire Safety & Emergency Preparedness", "Regular fire drills and emergency preparedness exercises are supported by clear response plans and procedures."],
      ["Pediatric First Aid", "All teaching staff are trained in Pediatric First Aid, and the nursery has a dedicated First Aid Room with emergency supplies."],
      ["Staff Training", "We provide ongoing training in health and safety, first aid, BLS, fire safety, child protection, and emergency procedures."],
      ["Medication & Health Management", "Medication and health needs are managed according to clear policies in coordination with parents and relevant professionals."],
      ["Accident & Incident Management", "Accidents and incidents are documented, monitored, and managed under established procedures; parents are informed when required."],
      ["School Transportation Safety", "Our buses follow Integrated Transport Centre safety requirements, including child pick-up and drop-off procedures."],
      ["Compliance with ADEK & Civil Defense Requirements", "We comply with ADEK, Civil Defense, and other relevant regulatory requirements and are subject to routine inspection."],
      ["Partnership with Parents", "We maintain open communication with parents about their child’s health, safety, and wellbeing."],
    ],
    protectionCards: [
      ["Child Protection Coordinator", "Our coordinator oversees child-protection policies, follows up safety and wellbeing concerns, and coordinates with relevant authorities when required."],
      ["Child Protection Team", "A dedicated team works with the coordinator to promote awareness, safeguarding practices, and appropriate responses to concerns."],
      ["Cooperation & Support", "We work with parents and relevant authorities when required, always prioritising the child’s best interests, safety, wellbeing, and development."],
      ["Everyone Has a Responsibility to Report", "Every staff member must report any concern, suspicion, disclosure, or indication related to a child’s safety or protection. Reports are treated seriously, confidentially, and respectfully."],
    ],
  },
  ar: {
    hero: "إجراءات الصحة والسلامة",
    intro: "إن الحفاظ على صحة وسلامة أطفالنا وموظفينا وحمايتها جزء أساسي من الحياة اليومية في الحضانة. نلتزم بتوفير بيئة آمنة وصحية وداعمة يتعلم فيها الأطفال ويلعبون ويستكشفون وينمون بثقة.",
    protection: "حماية الطفل",
    protectionIntro: "في حضانة كيدز لاند، تقع سلامة الأطفال وحمايتهم ورفاههم في صميم كل ما نقوم به. نلتزم بتوفير بيئة آمنة ومحترمة وداعمة، يُحمى فيها كل طفل من الإساءة والإهمال والضرر.",
    safety: [
      ["مسؤول الصحة والسلامة", "يتولى مسؤول متخصص الإشراف على إجراءات الصحة والسلامة والمخاطر المحتملة وتدابير الوقاية والاستجابة للطوارئ."],
      ["الصحة والنظافة", "نتبع إجراءات صارمة للصحة والنظافة للمساعدة في منع المرض والعدوى."],
      ["التنظيف والتعقيم", "تُنفذ أعمال التنظيف والتعقيم اليومية والمنتظمة في الفصول ومناطق اللعب والحمامات والمرافق المشتركة."],
      ["بيئة آمنة ومأمونة", "تُجهز الفصول ومناطق اللعب بأنظمة إنذار الحريق وكاميرات المراقبة مع الحفاظ على الخصوصية وممارسات حماية الطفل."],
      ["السلامة من الحرائق والاستعداد للطوارئ", "تُجرى تدريبات منتظمة على الحرائق وتمارين للاستعداد للطوارئ مدعومة بخطط وإجراءات واضحة."],
      ["الإسعافات الأولية للأطفال", "جميع أعضاء الهيئة التعليمية مدربون على الإسعافات الأولية للأطفال، وتتوفر غرفة إسعافات أولية مخصصة ومجهزة."],
      ["تدريب الموظفين", "نوفر تدريبًا مستمرًا في الصحة والسلامة والإسعافات الأولية والإنعاش الأساسي وسلامة الحرائق وحماية الطفل والطوارئ."],
      ["إدارة الأدوية والصحة", "تُدار أدوية الأطفال واحتياجاتهم الصحية وفق سياسات واضحة بالتنسيق مع أولياء الأمور والمتخصصين عند الحاجة."],
      ["إدارة الحوادث والوقائع", "توثق الحوادث والوقائع وتتابع وتدار وفق الإجراءات المعتمدة، ويُبلغ أولياء الأمور عند الحاجة."],
      ["سلامة النقل المدرسي", "تلتزم حافلاتنا بمتطلبات السلامة لمركز النقل المتكامل، بما في ذلك إجراءات الاستلام والتسليم المناسبة للأطفال."],
      ["الالتزام بمتطلبات أدك والدفاع المدني", "نلتزم بمتطلبات أدك والدفاع المدني والجهات التنظيمية ذات الصلة، وتخضع الحضانة للتفتيش الدوري."],
      ["الشراكة مع أولياء الأمور", "نحافظ على تواصل مفتوح مع أولياء الأمور حول صحة أطفالهم وسلامتهم ورفاههم."],
    ],
    protectionCards: [
      ["منسق حماية الطفل", "يشرف منسق حماية الطفل على تطبيق السياسات والإجراءات ويتابع المخاوف المتعلقة بالسلامة والرفاه وينسق مع الجهات المعنية عند الحاجة."],
      ["فريق حماية الطفل", "يعمل فريق مخصص مع المنسق لتعزيز الوعي ودعم ممارسات الحماية والاستجابة المناسبة للمخاوف."],
      ["التعاون والدعم", "نتعاون مع أولياء الأمور والجهات المعنية عند الحاجة، مع إعطاء الأولوية دائمًا لمصلحة الطفل وسلامته ورفاهه ونموه."],
      ["الجميع مسؤول عن الإبلاغ", "يتحمل جميع الموظفين مسؤولية الإبلاغ عن أي قلق أو اشتباه أو إفصاح يتعلق بسلامة الطفل أو حمايته. وتُعامل البلاغات بجدية وسرية واحترام."],
    ],
  },
};

export default function HealthSafety() {
  const { language } = useLanguage();
  const c = content[language];
  useEffect(() => {
    const elements = document.querySelectorAll(".health-reveal, .safety-card, .protection-card");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <main className="health-page" dir={language === "ar" ? "rtl" : "ltr"}>
    <section className="health-hero health-reveal"><h1>{c.hero}</h1><p>{c.intro}</p></section>
    <section className="safety-section"><div className="safety-grid">{c.safety.map(([title, text], index) => { const Icon = safetyIcons[index]; return <article className={`safety-card card-${safetyColors[index]}`} key={title}><div className={`safety-icon icon-${safetyColors[index]}`}><Icon size={20}/></div><h2>{title}</h2><p>{text}</p></article>; })}</div></section>
    <section className="protection-intro health-reveal"><h1>{c.protection}</h1><p>{c.protectionIntro}</p></section>
    <section className="protection-section"><div className="protection-grid">{c.protectionCards.map(([title, text], index) => { const Icon = protectionIcons[index]; return <article className={`protection-card ${protectionClasses[index]}`} key={title}><div className="protection-icon"><Icon size={20}/></div><h2>{title}</h2><p>{text}</p><div className="background-icon"><Icon size={90}/></div></article>; })}</div></section>
  </main>;
}
