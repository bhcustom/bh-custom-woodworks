import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["wedding-decor"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function WeddingDecorPage() {
  return <ServicePage service={service} />;
}
