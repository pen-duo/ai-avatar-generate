import Hero from "@/components/hero";
import PromptInput from "@/components/input";
import Avatars from "@/components/avatars";

export default function Page() {
  return (
    <div className="md:mt-16">
      <div className="max-w-3xl mx-auto">
        <Hero />
      </div>
      <div className="mx-auto my-4 flex max-w-lg justify-center">
        <PromptInput />
      </div>
      <div className="pt-0">
        <Avatars />
      </div>
    </div>
  );
}
