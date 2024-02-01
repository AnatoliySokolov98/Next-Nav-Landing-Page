import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image width={40} height={40} src="/next-logo.png" alt="Next.Nav logo"/>
						<p className="font-bold text-inherit">NEXT.NAV</p>
					</NextLink>
				</NavbarBrand>
						<NavbarItem className="ml-[30px]">
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								isExternal
								href='https://medium.com/@nathanjames719/next-nav-the-solution-to-confusing-file-based-routing-in-next-js-3c6db2346a05'
						>
							Blog
							</Link>
					</NavbarItem>
			</NavbarContent>

			<NavbarContent
				className="flex basis-full"
				justify="end"
			>
				<NavbarItem className="flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
						<LinkedInIcon className="text-default-500"/>
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
