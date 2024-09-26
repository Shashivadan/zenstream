import { fetchDramaInfoById } from '@/data-access';
import React from 'react'

export default async function page({params} : { params: { id: string[] } }) {

const id = params.id.join("/")
const data = await fetchDramaInfoById(id);

  return (
    <div>{JSON.stringify(data)} {id}</div>
  )
}
