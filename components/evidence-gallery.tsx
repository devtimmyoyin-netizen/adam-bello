"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function EvidenceGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(-1);
  return <><div className="evidence-grid">{images.map((src, i) => <button key={`${src}-${i}`} onClick={() => setIndex(i)} aria-label={`Open evidence image ${i + 1} for ${title}`}><Image src={src} alt={`${title} evidence image ${i + 1}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></button>)}</div><Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={images.map((src) => ({ src }))} /></>;
}
