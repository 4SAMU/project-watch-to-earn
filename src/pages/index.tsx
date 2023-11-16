import { Logo } from "@/components/commons";
import { BluishButton, DarkButton } from "@/components/commons/Buttons";
import { TextFieldBox } from "@/components/commons/TextField";
import { Layout } from "@/layout";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <Layout>
      <Logo />
      <BluishButton>View NFT Collection</BluishButton>
      <DarkButton>View NFT Collection</DarkButton>
      <TextFieldBox value={searchValue} onChange={handleSearchChange} />
    </Layout>
  );
}
