import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "Request a Custom Quote",
  description:
    "Tell us about your custom woodworking or laser engraving project and receive a personalized quote. Free estimates on all custom orders.",
  alternates: {
    canonical: "/quote",
  },
};

export default function QuotePage() {
  return (
    <main className="section container quote-page">
      <QuoteForm />
    </main>
  );
}
