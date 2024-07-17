import Link from "next/link"
import { ThemeToggleButton } from "./theme-toggle-button"
import { buttonVariants } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-4">
      <Link href={"/"} className="text-lg font-bold">
        NextActionsCRUD
      </Link>

      <div className="flex gap-x-4 items-center">
        <Link
          href={"/new"}
          className={buttonVariants({ variant: "secondary" })}
        >
          Create Task
        </Link>
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
