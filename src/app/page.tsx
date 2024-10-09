import { Suspense } from "react";
import { VStack } from "@chakra-ui/react";
import Loading from "@/components/Loading";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <main>
      <VStack>
        <Suspense fallback={<Loading />}>
          <MainContainer />
        </Suspense>
      </VStack>
    </main>
  );
}
