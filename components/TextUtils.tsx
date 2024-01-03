/**
 *
 * @param text
 * @returns
 */
export function Headline({ text }: { text: string }) {
  return <h3 className="m-3 text-lg font-semibold">{text}</h3>;
}

/**
 *
 * @param text
 * @returns
 */
export function Paragraph({ text }: { text: string }) {
  return <p className="m-3 py-2 text-black dark:text-white">{text}</p>;
}
