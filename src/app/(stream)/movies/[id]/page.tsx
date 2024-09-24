import { decodeParam } from '@/lib/url-param-encoder'
import React from 'react'

export default function page({params} : { params: { id: string } }) {
  const id = decodeParam(params.id)
  return (
    <div>{id}</div>
  )
}
