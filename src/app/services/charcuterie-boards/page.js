import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["charcuterie-boards"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
  alternates: {
    canonical: "/services/charcuterie-boards",
  },
};

export default function CharcuterieBoardsPage() {
  return <ServicePage service={service} />;
}
