import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider"
import { Image } from "@nextui-org/image";
import { title, subtitle } from "./primitives";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import {
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";

import { button as buttonStyles } from "@nextui-org/theme";

type props = {
  header: string,
  profile: string,
  alttext: string,
  linkedin: string,
  github: string,
}

const Profile = ({header, profile, alttext, linkedin, github}: props) => {
  return (
    <div className='flex justify-space-between align-center'>
      <Card className='mt-10 p-5 flex flex-col'>
        <CardHeader className='flex flex-col'>
          <h3 className={title({size: 'ssm'})}>
            {header}
          </h3>
        </CardHeader>
        <CardBody className='flex flex-col gap-5 items-center'>

          <Image className="outline outline-offset-1 outline-1 outline-blue-500" src={profile} height={60} width={100} alt={alttext} />

          <div className = 'w-[10vw] flex items-center justify-between'>
          <Link isExternal href={linkedin} aria-label="LinkedIn">
						<LinkedInIcon className="text-default-500"/>
					</Link>
					<Link isExternal href={github} aria-label="Github">
						<GithubIcon className="text-default-500" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Profile