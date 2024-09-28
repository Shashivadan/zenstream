export const movieSrc = {
  vidsrcMe: (id: string): string => `https://vidsrc.xyz/embed/movie/${id}`,
  vidsrcRip: (id: string): string => `https://vidsrc.rip/embed/movie/${id}`,
  autoembedCc: (id: string): string =>
    `https://player.autoembed.cc/embed/movie/${id}`,
  sdspXyz: (id: string): string => `https://v1.sdsp.xyz/embed/movie/${id}`,
  smashystreamCom: (id: string): string =>
    `https://player.smashy.stream/movie/${id}`,
  superembedStream: (id: string): string =>
    `https://multiembed.mov/directstream.php?video_id=${id}`,
  embed2Cc: (id: string): string => `https://www.2embed.cc/embed/${id}`,
  vidlinkPro: (id: string): string => `https://vidlink.pro/movie/${id}`,
  vidsrcPro: (id: string): string => `https://vidsrc.pro/embed/movie/${id}`,
  vidsrcIcu: (id: string): string => `https://vidsrc.icu/embed/movie/${id}`,
  vidsrcCc: (id: string): string => `https://vidsrc.cc/v2/embed/movie/${id}`,
  moviesapiClub: (id: string): string => `https://moviesapi.club/movie/${id}`,
  movieeTv: (id: string): string => `https://moviee.tv/embed/movie/${id}`,
  gomoTo: (id: string): string => `https://gomo.to/movie/${id}`,
  vidbingeCom: (id: string): string =>
    `https://www.vidbinge.com/media/tmdb-movie-${id}`,
  vidSrcVip: (id: string): string => `https://dl.vidsrc.vip/movie/${id}`,
};
