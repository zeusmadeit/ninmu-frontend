'use client';

import {CheckIcon, LanguageIcon} from '@heroicons/react/24/solid';
import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import {useTransition} from 'react';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {Locale} from '@/config';
import {setUserLocale} from '@/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{value: string; label: string}>;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, items, label}: Props) {
  // const pathname = usePathname();
  // const isActive = href === pathname;
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <NavigationMenu.Link asChild>
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            'rounded-sm py-2 px-2 transition-colors hover:bg-grass3',
            isPending && 'pointer-events-none opacity-60'
          )}
        >
          <Select.Icon>
            <LanguageIcon className="h-6 w-6 text-grass10 transition-colors group-hover:text-grass3" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align="end"
            className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md"
            position="popper"
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className="flex cursor-default items-center px-3 py-2 text-violet11 data-[highlighted]:bg-grass3"
                  value={item.value}
                  // onClick={() => onChange(item.value)}
                >
                  <div className="mr-2 w-[1rem]">
                    {item.value === defaultValue && (
                      <CheckIcon className="h-5 w-5 text-grass10" />
                    )}
                  </div>
                  <span className="text-grass10">{item.label}</span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className="fill-white text-white" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </NavigationMenu.Link>
  );
}
