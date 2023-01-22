
export function Heading({ node, children, classNames }) {
  const { style, _key } = node

  const HeadingTag = style;
  // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
  const headingId = `h${_key}`;

  return (
    <HeadingTag className={classNames} id={headingId}>
      {children}
    </HeadingTag>
  )
}