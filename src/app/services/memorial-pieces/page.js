import ServicePage from "../../components/ServicePage";
import { services } from "../../data/services";

const service = services["memorial-pieces"];

export const metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function MemorialPiecesPage() {
  return <ServicePage service={service} />;
}
