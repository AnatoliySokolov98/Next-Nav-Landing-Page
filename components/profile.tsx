import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { title} from "./primitives";
import { Link } from "@nextui-org/link";
import {
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";

import { ProfileProps } from "@/types";


const Profile = ({header, profile, alttext, linkedin, github}: ProfileProps) => {
  return (
      <Card className='mt-10 p-5 flex flex-col w-[250px] justify-space-between align-center'>
        <CardHeader className='flex flex-col'>
          <h3 className={title({size: 'ssm'})}>
            {header}
          </h3>
        </CardHeader>
        <CardBody className='flex flex-col gap-5 items-center overflow-hidden'>

          <Image className="outline outline-offset-1 outline-1 outline-blue-500" src={profile} height={200} width={200} alt={alttext} />

          <div className = 'w-[10vw] flex items-center align-center justify-center gap-10'>
          <Link isExternal href={linkedin} aria-label="LinkedIn">
						<LinkedInIcon className="text-default-500"/>
					</Link>
					<Link isExternal href={github} aria-label="Github">
						<GithubIcon className="text-default-500" />
            </Link>
          </div>
        </CardBody>
      </Card>
  )
}

export default Profile