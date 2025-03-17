import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function PromptInput() {
  return (
    <div className="flex flex-col w-full">
      <form className="flex w-full flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Avatar Description"
          // value={}
        />
        <Button type="button">Generate</Button>
      </form>
    </div>
  );
}
