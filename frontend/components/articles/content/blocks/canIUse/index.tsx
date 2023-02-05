import { PortableTextTypeComponent } from "@portabletext/react";
import Script from "next/script";

export const CanIUse: PortableTextTypeComponent = function ({ value }) {
  const { feature } = value
  return (
    <div className="my-4 ciu_embed" data-feature={feature} data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
      <picture>
        <source type="image/webp" srcSet={`https://caniuse.bitsofco.de/image/${feature}.webp`} />
        <source type="image/png" srcSet={`https://caniuse.bitsofco.de/image/${feature}.png`} />
        <img src="https://caniuse.bitsofco.de/image/css-container-queries.jpg" alt={`Data on support for the ${feature} feature across the major browsers from caniuse.com`} loading="lazy" fetchpriority="high" width={800} height={388} />
      </picture>
      <Script src='https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js' />
    </div>
  )
}