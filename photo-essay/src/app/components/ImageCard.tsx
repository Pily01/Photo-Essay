import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'

type ImageCardProps = {
    imageSrc: string,
    imageCaption: string,
    imageAlt: string
}

export default function ImageCard({imageSrc, imageCaption, imageAlt} : ImageCardProps) {
  return (
    <figure className="mt-16">
    <img
      className="aspect-auto rounded-xl bg-gray-50 object-center"
      src={imageSrc}
      alt={imageAlt}
    />
    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
      <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
      {imageCaption}
    </figcaption>
  </figure>
  )
}
