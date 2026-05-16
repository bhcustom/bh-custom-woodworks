import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["business-signage"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function BusinessSignagePage() {
  return <ServicePage service={service} />;
}
