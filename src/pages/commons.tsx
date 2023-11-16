import { Logo } from "@/components/commons";
import { Layout } from "@/layout";

export default function CommonsPage() {
  return (
    <Layout
      title="common components"
      description="shared components across all pages"
    >
      <Logo />
    </Layout>
  );
}
