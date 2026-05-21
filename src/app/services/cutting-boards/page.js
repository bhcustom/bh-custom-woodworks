import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["cutting-boards"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/cutting-boards",
  },
};

export default function CuttingBoardsPage() {
  return <ServicePage service={service} />;
}
