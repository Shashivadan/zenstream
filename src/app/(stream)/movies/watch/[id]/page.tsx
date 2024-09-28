import VideoPlayer from '@/components/stream-containers/movies-section/movies-player/video-player';
import { movieSrc } from '@/data-access/api-contents';
import { decodeParam } from '@/lib/url-param-encoder'
import React from 'react'

type VideoSourceType = "autoembed" | "vidsrcpro" | "vidsrc" | "superembed";
//  const videoUrls: Record<VideoSourceType, string> = {
//    autoembed: `https://player.autoembed.cc/embed/movie/${id}`,
//    vidsrcpro: `https://vidsrc.pro/embed/movie/${id}`,
//    vidsrc: `https://vidsrc.in/embed/movie/${id}`,
//    superembed: `https://multiembed.mov/?video_id=${id}&tmdb=1`,
//  };
export default function page({params} : { params: { id: string } }) {
  const id = decodeParam(params.id)





  return (
   <div>
    <VideoPlayer id={id} />

   </div>
  );
}
