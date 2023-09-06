import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image"
import Feature from "@/components/feature";
import Profile from "@/components/profile";




export default function Home() {

	return (
		<section className='flex flex-col items-center justify-center gap-y-10'>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

				<div className="flex-col">
					<div className="inline-block text-center justify-center">
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
					<div className="flex gap-3 justify-center mt-10">
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
				</div>

			</section>

			<section className=" flex flex-col items-center justify-center gap-3 mt-20">
				<h2 className={title({ size: 'md' })}> Features Demo </h2>
				<Feature header="Opening Extension" bullets={["Install the extension from VS Code Store", "Open a Next.js project that is using the App Router in VSCode", "Launch Next.Nav by opening the command palette using (Ctrl+Shift+P in Windows/Linux) or (Command+Shift+P MacOS) and typing Next.Nav highlight and press Enter", ]} path="https://i.imgur.com/10qMgfY.gif" alttext="instructions"/>
				<Feature header="Getting File Structure" bullets={["Initially you will see a file structure with some dummy data", "To get the file structure for your project first right click your app folder and click copy path or copy relative path", "Then click on the import path icon and paste the path", "The app will technically work on any file structure but it is best used for the App Router to display server/client rendering correctly", "We will also only display javascript, typescript, or css files and ignore all other files in the display as this is designed to visualize pages easier"]} path="https://i.imgur.com/sVYwqVu.gif" alttext="instructions"/>
				<Feature header="Opening a File" bullets={["When you hover over a file type in the tree it will tell you the name","You can click on the icon of the file in the folder to open it", "Alternatively, you can click on the folder to open a modal with all of the files", "Click on a file to open it"]} path="https://i.imgur.com/zDKCPjo.gif" alttext="instructions"/>
				<Feature header="Adding Files" bullets={["Click on any blank space on a folder node to open a modal to view its contents","Add a file name and extension in the input field", "Add file with the green add file icon"]} path="https://i.imgur.com/xdraVMG.gif" alttext="instructions"/>
				<Feature header="Deleting Files" bullets={["Click on any blank space on a folder node to open a modal to view a folders contents","Click the red trash icon next to the file you want to delete", "Click confirm in the pop-over to permanently delete the file. (warning: this can not be undone)"]} path="https://i.imgur.com/U4KE5DN.gif" alttext="instructions"/>
				<Feature header="Adding Folders" bullets={["Click on the plus icon on the right edge of the folder node you want your new folder to be nested in","Give your new folder a name and submit"]} path="https://i.imgur.com/2b3FngG.gif" alttext="instructions"/>
				<Feature header="Deleting Folders" bullets={["Warning: this will permanently delete all contained files and sub folders!!","Click on the minus icon on the left edge of the folder node you want to delete", "Type the name of the folder to confirm deletion of the directory and all sub directories and files contained (warning: this can not be undone)"]} path="https://i.imgur.com/qXMlm0Y.gif" alttext="instructions"/>
			</section>

			<section className=" flex flex-col items-center justify-center gap-3 mt-10">
				<h2 className={title({ size: 'md' })}> Tutorial Video </h2>
				<iframe
					className = 'mt-5 rounded-3xl w-[65vw] h-[40vw]'

					src="https://www.youtube.com/embed/NoWs7VAJ6lw"
					title="Next.Nav Tutorial Video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
			></iframe>




			</section>
			<section className="flex flex-col items-center  gap-3 mt-20">
				<h2 className={title({ size: 'md' })}> Meet Our Fantastic Team of Software Engineers</h2>
				<div className="flex items-center justify-between flex-wrap w-[80vw] mt-10">
					<Profile header="Anatoliy Sokolov" profile="/Anatoliy.jpg" alttext='anatoliy' linkedin='https://www.linkedin.com/in/anatoliy-sokolov' github='https://github.com/AnatoliySokolov98' />
					<Profile header="Brian Henkel" profile="/Brian.jpg" alttext='brian' linkedin='https://www.linkedin.com/in/b-henkel/' github='https://github.com/FANFICPDF' />
					<Profile header="Jordan Querubin" profile="/Jordan.jpg" alttext='jordan' linkedin='https://www.linkedin.com/in/jordanquerubin' github='https://github.com/jequerubin' />
					<Profile header="Nathan Peel" profile="/Nathan.jpg" alttext='nathan' linkedin='https://www.linkedin.com/in/nathaniel-peel/' github='https://github.com/nathanpeel' />
				</div>
			</section>

		</section>
	);
}
