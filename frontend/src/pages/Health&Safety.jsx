import { useEffect } from "react";

import {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  LockKeyhole,
  Flame,
  BriefcaseMedical,
  GraduationCap,
  Pill,
  Siren,
  Bus,
  BadgeCheck,
  Handshake,
  Baby,
  Users,
  FileWarning,
  HeartHandshake,
} from "lucide-react";

import "./Health&Safety.css";

function HealthSafety() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".health-reveal, .safety-card, .protection-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const safetyItems = [
    {
      title: "Health & Safety Officer",
      text: "A dedicated Health & Safety Officer is present to oversee procedures and conduct regular risk assessments to ensure optimal safety.",
      icon: ShieldCheck,
      color: "purple",
    },
    {
      title: "Health & Hygiene",
      text: "We follow strict health and hygiene procedures throughout the nursery to prevent illness and maintain a healthy environment.",
      icon: HeartPulse,
      color: "green",
    },
    {
      title: "Cleaning & Sanitization",
      text: "Daily and regular cleaning and sanitation routines for classrooms, toys, and all shared areas to ensure absolute cleanliness.",
      icon: Sparkles,
      color: "yellow",
    },
    {
      title: "Safe & Secure Environment",
      text: "All classrooms and play areas are equipped with fire alarm systems and CCTV systems to support children’s safety and security, while maintaining appropriate privacy and child protection practices.",
      icon: LockKeyhole,
      color: "pink",
    },
    {
      title: "Fire Safety & Emergency Preparedness",
      text: "Regular fire drills and emergency preparedness exercises are conducted, supported by clear plans and procedures for responding to different types of emergencies.",
      icon: Flame,
      color: "red",
    },
    {
      title: "Pediatric First Aid",
      text: "All teaching staff are trained in Pediatric First Aid, and the nursery has a dedicated First Aid Room equipped with the necessary emergency supplies.",
      icon: BriefcaseMedical,
      color: "cyan",
    },
    {
      title: "Staff Training",
      text: "We provide ongoing staff training in key areas including health and safety, Pediatric First Aid, Basic Life Support (BLS), fire safety, child protection, and emergency procedures.",
      icon: GraduationCap,
      color: "beige",
    },
    {
      title: "Medication & Health Management",
      text: "Children’s medication and health needs are managed according to clear policies and procedures, in coordination with parents and relevant professionals when required.",
      icon: Pill,
      color: "yellow",
    },
    {
      title: "Accident & Incident Management",
      text: "Accidents and incidents are documented, monitored, and managed in accordance with established procedures. Parents are informed when required, and appropriate measures are taken to ensure the child’s safety and well being.",
      icon: Siren,
      color: "blue",
    },
    {
      title: "School Transportation Safety",
      text: "We provide safe and reliable school transportation services. Our nursery buses operate in accordance with the safety requirements and procedures of the Integrated Transport Centre (ITC), including appropriate child pick-up and drop-off procedures.",
      icon: Bus,
      color: "pink",
    },
    {
      title: "Compliance with ADEK & Civil Defense Requirements",
      text: "We comply with the requirements of the Abu Dhabi Department of Education and Knowledge (ADEK), Civil Defense, and other relevant regulatory authorities. The nursery is subject to routine assessment, monitoring, and inspection in accordance with applicable requirements.",
      icon: BadgeCheck,
      color: "green",
    },
    {
      title: "Partnership with Parents",
      text: "We believe that children’s safety is a shared responsibility. We maintain open communication with parents and keep them informed about important matters relating to their child’s health, safety, and wellbeing.",
      icon: Handshake,
      color: "yellow",
    },
  ];

  const protectionItems = [
    {
      title: "Child Protection Coordinator",
      text: "Our Child Protection Coordinator oversees the implementation of child protection policies and procedures, follows up on any concerns relating to a child’s safety and well being, and coordinates with relevant authorities when required.",
      icon: Baby,
      className: "protection-yellow",
    },
    {
      title: "Child Protection Team",
      text: "The nursery has a dedicated Child Protection Team that works closely with the Child Protection Coordinator to promote awareness, support safeguarding practices, and respond appropriately to any concerns or disclosures.",
      icon: ShieldCheck,
      className: "protection-purple",
    },
    {
      title: "Cooperation & Support",
      text: "We work collaboratively with parents and relevant authorities when required, always prioritizing the best interests of the child and taking appropriate steps to safeguard their safety, well being, and development.",
      icon: HeartHandshake,
      className: "protection-green",
    },
    {
      title: "Everyone Has a Responsibility to Report",
      text: "All staff members have a responsibility and are required to report any concern, suspicion, disclosure, or indication relating to a child’s safety or protection. Reporting is not limited to the Child Protection Coordinator or the Child Protection Team; it is a shared responsibility across the entire nursery community. All concerns and reports are treated seriously, confidentially, and respectfully, with appropriate action taken in accordance with the nursery’s policies and applicable requirements.",
      icon: Users,
      className: "protection-pink",
    },
  ];

  return (
    <main className="health-page">

      {/* HERO */}
      <section className="health-hero health-reveal">
        <h1>Health And Safety Measures</h1>

        <p>
          Maintaining and protecting the health and safety of our children and
          staff is a fundamental part of daily nursery life. We are committed
          to providing a safe, healthy, and supportive environment where
          children can learn, explore, and grow with confidence.
        </p>
      </section>

      {/* SAFETY */}
      <section className="safety-section">
        <div className="safety-grid">

          {safetyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`safety-card card-${item.color}`}
                key={index}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >
                <div className={`safety-icon icon-${item.color}`}>
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h2>{item.title}</h2>

                <p>{item.text}</p>
              </article>
            );
          })}

        </div>
      </section>

      {/* CHILD PROTECTION INTRO */}
      <section className="protection-intro health-reveal">
        <h1>Child Protection</h1>

        <p>
          At Kids Land Nursery, children’s safety, protection, and well being
          are at the heart of everything we do. We are committed to providing a
          safe, respectful, and nurturing environment where every child is
          protected from abuse, neglect, and harm.
        </p>
      </section>

      {/* PROTECTION */}
      <section className="protection-section">
        <div className="protection-grid">

          {protectionItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`protection-card ${item.className}`}
                key={index}
                style={{
                  "--delay": `${index * 0.12}s`,
                }}
              >
                <div className="protection-icon">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h2>{item.title}</h2>

                <p>{item.text}</p>

                <div className="background-icon">
                  <Icon size={90} strokeWidth={1.5} />
                </div>
              </article>
            );
          })}

        </div>
      </section>

    </main>
  );
}

export default HealthSafety;