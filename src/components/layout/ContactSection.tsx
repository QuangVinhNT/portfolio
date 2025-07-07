import ContactItem from "../ui/ContactItem";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
import type { Contact } from "@/types";

const contacts: Contact[] = [
  {
    icon: <Mail size={48} className="dark:text-white" />,
    label: 'Email',
    value: 'ntqvinh.251103@gmail.com'
  },
  {
    icon: <Facebook size={48} className="dark:text-white" />,
    label: 'Facebook',
    link: "https://www.facebook.com/moppie.523"
  },
  {
    icon: <Linkedin size={48} className="dark:text-white" />,
    label: 'Linkedin',
    link: "https://www.linkedin.com/in/moppie523"
  },
  {
    icon: <MapPin size={48} className="dark:text-white" />,
    label: 'Address',
    value: 'Ba Na Commune, Da Nang City, Vietnam'
  }
];

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <div className="mt-40" id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <span className="font-semibold block text-center dark:text-white">Contact</span>
        <h1 className="font-anton text-4xl text-center mb-10 dark:text-white">Let's Connect and Collaborate!</h1>
        <div className="grid grid-cols-4">
          {contacts.map((contact, idx) => (
            <ContactItem key={idx} contact={contact} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
