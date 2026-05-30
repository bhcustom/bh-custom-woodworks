import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Have a general question, custom inquiry, or a project in mind? Reach out to BH Custom Woodworks and let us know how we can help you today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="section container">
      <ContactForm />
    </main>
  );
}
