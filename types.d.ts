import 'react';

/**
 * This allows developers to extend typescript JSX elements to add attributes
 * that are not yet included, custom or to edit current JSX element attributes,
 * ie make alt a required attriibute rather than a Optional Properties
 *
 * Blog Example: https://fettblog.eu/typescript-react-extending-jsx-elements/
 *
 */

declare module 'react' {
  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    width?: number | string;
    height?: number | string;
  }

  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    imagesizes?: string;
    imagesrcset?: string;
    fetchpriority?: 'high' | 'low' | 'auto';
  }

  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
