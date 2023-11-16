import { LayoutProps } from "@/types";
import Head from "next/head";

function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "Fanatica"}</title>
        <meta name="description" content={description || "watch to earn"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23142d2c%22></rect><path fill=%22%23fff%22 d=%22M9.41 34.73L17.73 34.73L23.31 44.38L23.55 44.38L29.19 34.73L37.45 34.73L28.23 50.00L37.75 65.27L29.28 65.27L23.55 55.52L23.31 55.52L17.58 65.27L9.17 65.27L18.64 50.00L9.41 34.73ZM48.58 52.21L48.58 52.21L48.58 65.27L41.28 65.27L41.28 42.36L48.22 42.36L48.22 46.57L48.47 46.57Q49.23 44.47 51.07 43.27Q52.90 42.07 55.44 42.07L55.44 42.07Q57.85 42.07 59.63 43.15Q61.42 44.23 62.41 46.16Q63.40 48.09 63.39 50.67L63.39 50.67L63.39 65.27L56.09 65.27L56.09 52.10Q56.11 50.19 55.13 49.12Q54.15 48.05 52.42 48.05L52.42 48.05Q51.28 48.05 50.40 48.55Q49.53 49.05 49.06 49.97Q48.59 50.89 48.58 52.21ZM74.29 40.72L65.01 40.72L65.01 34.73L90.83 34.73L90.83 40.72L81.57 40.72L81.57 65.27L74.29 65.27L74.29 40.72Z%22></path></svg>"
        />
      </Head>
      {/* <nav>{}</nav> */}
      <main>{children}</main>
      {/* <footer>{<Footer />}</footer> */}
    </>
  );
}

export default Layout;
