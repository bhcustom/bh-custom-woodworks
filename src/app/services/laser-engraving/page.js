import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["laser-engraving"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function LaserEngravingPage() {
  return <ServicePage service={service} />;
}
