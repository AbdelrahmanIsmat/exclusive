import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
const DropdownPrimitive = ({ triggerComponent, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {triggerComponent && triggerComponent()}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-48 rounded-lg bg-white shadow will-change-[opacity,transform]"
          sideOffset={32}
        >
          {items &&
            Object.keys(items).map((item) => (
              <DropdownMenu.Item
                className={clsx(
                  "group text-body-l data-highlighted:bg-light-grey cursor-pointer p-4 leading-none outline-none",
                  {
                    "text-red": items[item].label.includes("Delete"),
                  }
                )}
                key={items[item].label}
                onClick={items[item].onClick}
              >
                {items[item].label}
              </DropdownMenu.Item>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownPrimitive;
