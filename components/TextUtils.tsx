type HeadlineProps = {
  text: string;
};

export function Headline({ text }: HeadlineProps) {
  return <h3 className="m-3 text-lg font-semibold">{text}</h3>;
}

type ParagraphProps = { text: string };

export function Paragraph({ text }: ParagraphProps) {
  return <p className="m-3 py-2 text-black dark:text-white">{text}</p>;
}
