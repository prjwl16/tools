'use client'
import * as react from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '../ui/switch'
import { Label } from '@radix-ui/react-dropdown-menu'

export function ChangeTheme() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme"
        onClick={() => {
          setTheme('light')
        }}
      />
      <Label>Theme</Label>
    </div>
  )
}
