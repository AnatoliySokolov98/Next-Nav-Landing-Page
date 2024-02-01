import { CardData } from "../types";
/**
 * The data for the cards on the home page.
 * 
 * Make sure to place these in the order you want them to appear on the page.
 */
export const cardData: CardData[] = [
  {
    header: "Opening Extension",
    bullets: [
      "Install the extension from VS Code Store",
      "Open a Next.js project that is using the App Router in VSCode",
      "Launch Next.Nav by clicking the icon on the status bar (have to have Next.Nav enabled on status bar icons)",
      "Alternatively, Launch Next.Nav by opening the command palette using (Ctrl+Shift+P in Windows/Linux) or (Command+Shift+P in MacOS) and typing Next.Nav highlight and press Enter",
      
    ],
    path: "https://i.imgur.com/JB0a26c.gif",
    alttext: "opening extension"
  },
  {
    header: "Route Traversal",
    bullets: [
      "You can traverse into sub trees/folders by pressing the sub-directory icon (to the right of the client/server) of the node you want to become the root node",
      "From the sub-directory, you can exit to the original tree by press the exit button on the root node. If this button is not there, you are already in the original tree.",
      "The original tree is determined by the initial folder path the extension opens on or the path you enter into the path field."
    ],
    path: "https://i.imgur.com/tfJXtFD.gif",
    alttext: "quick route traversal"
  },
  {
    header: "Getting Alternative File Structure",
    bullets: [
      "For most applications, the file structure will populate automatically. If you aren't using the src/app file strucutre, you will initially see a tutorial tree.",
      "If you aren't using the src/app file structure or you simply want to use a different directory as the root directory, copy the path of the root directory. It can be the full path or relative path.",
      "Click the import button in the top right and paste the path.",
      "Note that if you simply want to enter a sub directory, use the sub directory button on the nodes. Pasting a path into the import path field will make that directory the new root directory. You won't be able to traverse back up when doing this."
    ],
    path: "https://i.imgur.com/EMVb6w9.gif",
    alttext: "instructions"
  },
  {
    header: "Opening a File",
    bullets: [
      "When you hover over a file type in the tree it will tell you the name",
      "You can click on the icon of the file in the folder to open it",
      "Alternatively, you can click on the folder to open a modal with all of the files",
      "Click on a file to open it",
    ],
    path: "https://i.imgur.com/LLZQi6V.gif",
    alttext: "instructions"
  },
  {
    header: "Adding Files",
    bullets: [
      "Click on any blank space on a folder node to open a modal to view its contents",
      "Add a file name and extension in the input field",
      "Add file with the green add file icon",
    ],
    path: "https://i.imgur.com/MTga1G1.gif",
    alttext: "instructions"
  },
  {
    header: "Deleting Files",
    bullets: [
      "Click on any blank space on a folder node to open a modal to view a folders contents",
      "Click the red trash icon next to the file you want to delete",
      "Click confirm in the pop-over to permanently delete the file. (warning: this can not be undone)",
    ],
    path: "https://i.imgur.com/rZi5r9q.gif",
    alttext: "instructions"
  },
  {
    header: "Adding Folders",
    bullets: [
      "Click on the plus icon on the right edge of the folder node you want your new folder to be nested in",
      "Give your new folder a name and submit",
    ],
    path: "https://i.imgur.com/DSLN7aL.gif",
    alttext: "instructions"
  },
  {
    header: "Deleting Folders",
    bullets: [
      "Warning: this will permanently delete all contained files and sub folders!!",
      "Click on the minus icon on the left edge of the folder node you want to delete",
      "Type the name of the folder to confirm deletion of the directory and all sub directories and files contained (warning: this can not be undone)",
    ],
    path: "https://i.imgur.com/WZtWYx4.gif",
    alttext: "instructions"
  }
];