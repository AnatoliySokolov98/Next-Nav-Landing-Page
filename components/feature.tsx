import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider"
import { Image } from "@nextui-org/image";
import { title, subtitle } from "./primitives";

type props = {
  header: string,
  bullets: string[],
  path: string,
  alttext: string,
}

const Feature = ({header, bullets, path, alttext}: props) => {
  return (
    <div className='flex justify-space-between align-center'>
      <Card className='mt-10 px-5 w-[65vw] flex flex-col'>
        <CardHeader className='flex flex-col'>
          <h2 className={title({size: 'sm'})}>
            {header}
          </h2>
        </CardHeader>
        <CardBody className='flex flex-col gap-5 items-center'>
          <Divider />
          <Image className="outline outline-offset-1 outline-1 outline-blue-500" src={path} height={200} width={600} alt={alttext} />
          <Divider/>
          <ul className='list-disc list-inside'>
          {bullets.map((item, index) => (
            <li className='mb-3 ' key={index}>{item}</li>
          ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}

export default Feature