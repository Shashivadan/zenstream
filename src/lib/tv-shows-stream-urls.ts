export const tvShowsStreamUrls = {
  vidsrcMe: (id: string, season: string, episode: string): string =>
    `https://vidsrc.xyz/embed/tv/${id}/${season}/${episode}`,
  vidsrcRip: (id: string, season: string, episode: string): string =>
    `https://vidsrc.rip/embed/tv/${id}/${season}/${episode}`,
  autoembedCc: (id: string, season: string, episode: string): string =>
    `https://player.autoembed.cc/embed/tv/${id}/${season}/${episode}`,
  sdspXyz: (id: string, season: string, episode: string): string =>
    `https://v1.sdsp.xyz/embed/tv/${id}/${season}/${episode}`,
  smashystreamCom: (id: string, season: string, episode: string): string =>
    `https://player.smashy.stream/tv/${id}/${season}/${episode}`,
  superembedStream: (id: string, season: string, episode: string): string =>
    `https://multiembed.mov/directstream.php?video_id=${id}&s=${season}&e=${episode}`,
  embed2Cc: (id: string, season: string, episode: string): string =>
    `https://www.2embed.cc/embed/${id}/${season}/${episode}`,
  vidlinkPro: (id: string, season: string, episode: string): string =>
    `https://vidlink.pro/tv/${id}/${season}/${episode}`,
  vidsrcPro: (id: string, season: string, episode: string): string =>
    `https://vidsrc.pro/embed/tv/${id}/${season}/${episode}`,
  vidsrcIcu: (id: string, season: string, episode: string): string =>
    `https://vidsrc.icu/embed/tv/${id}/${season}/${episode}`,
  vidsrcCc: (id: string, season: string, episode: string): string =>
    `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}`,
  moviesapiClub: (id: string, season: string, episode: string): string =>
    `https://moviesapi.club/tv/${id}/${season}/${episode}`,
  movieeTv: (id: string, season: string, episode: string): string =>
    `https://moviee.tv/embed/tv/${id}/${season}/${episode}`,
  gomoTo: (id: string, season: string, episode: string): string =>
    `https://gomo.to/tv/${id}/${season}/${episode}`,
  vidbingeCom: (id: string, season: string, episode: string): string =>
    `https://www.vidbinge.com/media/tmdb-tv-${id}-${season}-${episode}`,
  vidSrcVip: (id: string, season: string, episode: string): string =>
    `https://dl.vidsrc.vip/tv/${id}/${season}/${episode}`,
};
