import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconMenu,
  Theme,
  buttonVariants,
  cn,
  themes,
} from 'ui'

import Link from 'next/link'
import HomeMenuIconPicker from './HomeMenuIconPicker'
import { useTheme } from 'next-themes'

const menu = [
  [
    {
      label: 'Supabase.com',
      icon: 'home',
      href: 'https://supabase.com',
      otherProps: {
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    },
    {
      label: 'GitHub',
      icon: 'github',
      href: 'https://github.com/supabase/supabase',
      otherProps: {
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    },
    {
      label: 'Support',
      icon: 'support',
      href: 'https://supabase.com/support',
      otherProps: {
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    },
  ],
]

const TopNavDropdown = () => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="flex">
        <button
          title="Menu dropdown button"
          className={cn(
            buttonVariants({ type: 'default' }),
            'text-foreground-light border-default w-[30px] min-w-[30px] h-[30px] data-[state=open]:bg-overlay-hover/30 hover:border-strong data-[state=open]:border-stronger hover:!bg-overlay-hover/50 bg-transparent'
          )}
        >
          <IconMenu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="w-64">
        {menu.map((menuSection, sectionIdx) => (
          <>
            {sectionIdx !== 0 && <DropdownMenuSeparator />}
            {menuSection.map((sectionItem) => (
              <Link key={sectionItem.href} href={sectionItem.href} {...sectionItem.otherProps}>
                <DropdownMenuItem className="space-x-2" onClick={() => {}}>
                  {sectionItem.icon && (
                    <HomeMenuIconPicker
                      icon={sectionItem.icon}
                      className="text-foreground-lighter"
                    />
                  )}
                  <p>{sectionItem.label}</p>
                </DropdownMenuItem>
              </Link>
            ))}
          </>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={(value) => {
              setTheme(value)
            }}
          >
            {themes
              .filter((x) => x.value === 'light' || x.value === 'dark' || x.value === 'system')
              .map((theme: Theme) => (
                <DropdownMenuRadioItem key={theme.value} value={theme.value}>
                  {theme.name}
                </DropdownMenuRadioItem>
              ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TopNavDropdown
