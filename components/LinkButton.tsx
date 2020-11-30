import Link, { LinkProps } from "next/link"

interface ButtonProps extends LinkProps {
  solid?: boolean
  title?: string,
  titleWeight?: "font-light" | "font-normal" | "font-medium" | "font-bold",
}

export function LinkButton(props: ButtonProps) {
  const { href, solid, title, titleWeight = "font-normal" } = props

    return (
      <Link href={href}><a className={`cursor-pointer flex flex-initial mx-8 h-12 w-4/12 rounded-lg justify-center items-center ${titleWeight} ${solid ? "bg-green-light text-green-dark" : "border-4 border-green-light text-green-light"}`}>{title}</a></Link>
    )
}