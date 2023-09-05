import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import Feature from "@/components/feature";
import Profile from "@/components/profile";




export default function Home() {

	return (
		<section className='flex flex-col items-center justify-center gap-y-10'>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title({size: "lg"})}>NEXT.NAV</h1><br/><br/>
					<h2 className={title({size: 'sm'})}>Navigate and Create routes&nbsp;</h2>
					<h2 className={title({ color: "blue", size: 'sm' })}>easily&nbsp;</h2>
					<br />
					<h2 className={title({size: 'sm'})}>
						in your Next.js application
					</h2><br/>
					<h3 className={subtitle({ class: "mt-4" })}>
						User friendly VSCode application
					</h3>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.store}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						<Image width={20} height={20} src="/vscode-alt.svg" alt="Vscode logo"/>
						Download from Store
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</section>

			<section className=" flex flex-col items-center justify-center gap-3 mt-20">
				<h2 className={title({ size: 'md' })}> Features Demo </h2>
				<Feature header="Opening Extension" bullets={["Install the extension from VS Code Store", "Open a Next.js project that is using the App Router in VSCode", "Launch Next.Nav by opening the command palette using (Ctrl+Shift+P in Windows/Linux) or (Command+Shift+P MacOS) and typing Next.Nav highlight and press Enter", ]} path="https://i.imgur.com/10qMgfY.gif" alttext="instructions"/>
				<Feature header="Getting File Structure" bullets={["Initially you will see a file structure with some dummy data", "To get the file structure for your project first right click your app folder and click copy path or copy relative path", "Then click on the import path icon and paste the path", "The app will technically work on any file structure but it is best used for the App Router to display server/client rendering correctly", "We will also only display javascript, typescript, or css files and ignore all other files in the display as this is designed to visualize pages easier"]} path="" alttext="instructions"/>
				<Feature header="Opening a File" bullets={["When you hover over a file type in the tree it will tell you the name","You can click on the icon of the file in the folder to open it", "Alternatively, you can click on the folder to open a modal with all of the files", "Click on a file to open it"]} path="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHE2bmR3cjJ1N2k5bndrdzQzd3Y4cHBuZmdpcngzbHlkMTk4amF6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UAbhWbANl9tbP45zlb/giphy.gif" alttext="instructions"/>
				<Feature header="Adding Files" bullets={["Click on any blank space on a folder node to open a modal to view its contents","Add a file name and extension in the input field", "Add file with the green add file icon"]} path="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExenV0eDdwbmpyems2c216ZmozZHY0ZmFrODF6NjgzZWVpdTEyZnB6diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h1BkyXNNsOMBZiMglk/giphy.gif" alttext="instructions"/>
				<Feature header="Deleting Files" bullets={["Click on any blank space on a folder node to open a modal to view a folders contents","Click the red trash icon next to the file you want to delete", "Click confirm in the pop-over to permanently delete the file. (warning: this can not be undone)"]} path="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGphc2h4aDRydGZkcHF4YjdtaHk5Ynl6aDdheHhuYTBsNmJxbWFoNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FpIb2ef29s1aJSuNR1/giphy.gif" alttext="instructions"/>
				<Feature header="Adding Folders" bullets={["Click on the plus icon on the right edge of the folder node you want your new folder to be nested in","Give your new folder a name and submit"]} path="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWF5aDEwZTlmenZyNWt4cWptNXZwZnFvMDkyd2RsM3htdjZlMzlnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gzcNUuLRovne2Fsqr1/giphy.gif" alttext="instructions"/>
				<Feature header="Deleting Folders" bullets={["Warning: this will permanently delete all contained files and sub folders!!","Click on the minus icon on the left edge of the folder node you want to delete", "Type the name of the folder to confirm deletion of the directory and all sub directories and files contained (warning: this can not be undone)"]} path="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDE1dGUxMmR1bXV6ZGFkazZkYTBvc2NxZzhxN212eTc2eTY3YTQzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ttfrPG7iilVkMvFYJj/giphy.gif" alttext="instructions"/>
			</section>

			<section className=" flex flex-col items-center justify-center gap-3 mt-10">
				<h2 className={title({ size: 'md' })}> Tutorial Video </h2>
				<iframe
					className = 'mt-5 rounded-3xl'
					width="1120"
					height="633"
					src="https://www.youtube.com/embed/ZXsQAXx_ao0"
					title="Shia LaBeouf &quot;Just Do It&quot; Motivational Speech (Original Video by LaBeouf, Rönkkö &amp; Turner)"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
			></iframe>

			</section>
			<section className="flex flex-col items-center  gap-3 mt-10">
				<h2 className={title({ size: 'md' })}> Meet Our Fantastic Team </h2>
				<div className="flex items-center justify-between w-[80vw]">
					<Profile header="Anatoliy Sokolov" profile="bobross.jpg" alttext='anatoliy' linkedin='https://www.linkedin.com/in/anatoliy-sokolov' github='https://github.com/AnatoliySokolov98' />
					<Profile header="Brian Henkel" profile="https://media.licdn.com/dms/image/C5603AQHC3PRNJlrTtQ/profile-displayphoto-shrink_200_200/0/1658959256427?e=1699488000&v=beta&t=s_oyJ5tIYaxUlkiI9jtASuD5iXBUElSGhdBVb4SzMxo" alttext='brian' linkedin='https://www.linkedin.com/in/b-henkel/' github='https://github.com/FANFICPDF' />
					<Profile header="Jordan Querubin" profile="https://media.licdn.com/dms/image/D5603AQGiNzTvjZxfdg/profile-displayphoto-shrink_200_200/0/1693462569723?e=1699488000&v=beta&t=jiDZOdSshIj-0Kx__4BVYrm5VeTCOjWJCI6wRKcRaMw" alttext='jordan' linkedin='https://www.linkedin.com/in/jordanquerubin' github='https://github.com/jequerubin' />
					<Profile header="Nathan Peel" profile="https://media.licdn.com/dms/image/D5603AQGMTkc4pOphgw/profile-displayphoto-shrink_200_200/0/1693629498457?e=1699488000&v=beta&t=xVO6NXaZQ7CseTsf0waiNvqgRRVBMQQ1DmZboO_mycM" alttext='nathan' linkedin='https://www.linkedin.com/in/nathaniel-peel/' github='https://github.com/nathanpeel' />
				</div>
			</section>

		</section>
	);
}
// type props = {
//   title: string,
//   bullets: string[],
//   path: string,
//   alttext: string,
// }