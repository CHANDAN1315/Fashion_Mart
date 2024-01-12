import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown, Button } from "rizzui";

export default function App({ title, optionData }: any) {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="outline" className="text-foreground">
          { title}
          <ChevronDownIcon className="ml-2 w-5" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu className="w-16">
        {optionData?.map((data: string) => (
          <div key={data}>
            <Dropdown.Item>{data}</Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
