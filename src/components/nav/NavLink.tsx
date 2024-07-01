'use client';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {useLocale, useTranslations} from 'next-intl';
import clsx from 'clsx';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';
import {ComponentProps} from 'react';

const Link = ({ href, ...props }:any) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};

export default Link;
