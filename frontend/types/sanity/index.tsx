export interface Slug {
  _type: 'slug'
  current: string
}

export interface SanityAsset {
  _type: 'reference'
  _ref: string
}

export interface SanityImage {
  _type: 'image'
  asset: SanityAsset
}