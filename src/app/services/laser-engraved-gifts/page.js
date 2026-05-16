import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["laser-engraved-gifts"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function LaserEngravedGiftsPage() {
  return <ServicePage service={service} />;
}
