import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["cutting-boards"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function CuttingBoardsPage() {
  return <ServicePage service={service} />;
}
