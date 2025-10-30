import { Container } from "@/components/layout/container";
import { List } from "@/components/list/list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NextPageWithLayout } from "@/types/page";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between mt-6">
          <Input />
          <Button />
        </div>
        <List />
      </Container>
    </>
  );
};

export default Home;
