import type { Contact } from "@/types";

type Props = {
  contact: Contact;
};
const ContactItem = (props: Props) => {
  const { contact } = props;
  return (
    <div className="flex flex-col items-center">
      {contact.icon}
      <h2 className="text-2xl font-anton mt-2 dark:text-white">{contact.label}</h2>
      {contact.value && <p className="dark:text-white text-center">{contact.value}</p>}
      {contact.link && <a href={contact.link} className="hover:underline dark:text-white text-center" target="_blank">Contact me</a>}
    </div>
  );
};

export default ContactItem;
