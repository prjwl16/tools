import { ModeToggle } from '@/components/theme/theme-toggle'
import { ChangeTheme } from '@/components/theme/toggle-theme'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      Hello
      <Button> Hey</Button>
      <ModeToggle />
      <ChangeTheme />
    </>
  )
}
