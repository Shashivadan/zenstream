
import DramaCarousel from '@/components/stream-containers/drama-section/drama-carousel/drama-carousel'
import DramaContent from '@/components/stream-containers/drama-section/drama-content/drama-content';
import React from 'react'

export default function page() {
  return (
    <div>
      <DramaCarousel />
      <div className="p-4">
        <DramaContent/>
      </div>
    </div>
  );
}
