import { Link, LinkProps } from "expo-router";

interface ILinkButtonProps extends LinkProps<string> {
  title: string
}

export function LinkButton({ title, ...rest }: ILinkButtonProps) {
  return (
    <Link className="text-slate-300 text-center text-base font-body" {...rest}>
      {title}
    </Link>
  )
}
