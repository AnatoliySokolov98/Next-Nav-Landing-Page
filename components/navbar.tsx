import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className="w-full bg-background border-b border-divider sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Left side - Logo and Brand */}
					<div className="flex items-center gap-3">
						<NextLink className="flex justify-start items-center gap-2" href="/">
							<Image width={40} height={40} src="/next-logo.png" alt="Next.Nav logo"/>
							<p className="font-bold text-inherit text-xl">NEXT.NAV</p>
						</NextLink>
						<div className="ml-8 hidden sm:block">
							<a
								className="text-foreground hover:text-primary transition-colors"
								href='https://medium.com/@nathanjames719/next-nav-the-solution-to-confusing-file-based-routing-in-next-js-3c6db2346a05'
								target="_blank"
								rel="noopener noreferrer"
							>
								Blog
							</a>
						</div>
					</div>

					{/* Right side - Social links and theme switch */}
					<div className="flex items-center gap-4">
						<a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
							<TwitterIcon className="text-default-500" />
						</a>
						<a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
							<LinkedInIcon className="text-default-500"/>
						</a>
						<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:opacity-80 transition-opacity">
							<GithubIcon className="text-default-500" />
						</a>
						<ThemeSwitch />
					</div>
				</div>
			</div>
		</nav>
	);
};
