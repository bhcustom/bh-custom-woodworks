import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["custom-wood-signs"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function CustomWoodSignsPage() {
  return <ServicePage service={service} />;
}
