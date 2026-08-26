import { all } from "lowlight";
import rehypeHighlight from "rehype-highlight";

/**
 * `rehype-highlight` with lowlight's full language set baked in.
 *
 * `languages: all` is a map of grammar functions, so it can't be passed as a
 * plugin option under the serialization next.config.ts describes. Closing over
 * it here leaves this plugin with no options at all.
 */
export default function rehypeHighlightAll() {
  return rehypeHighlight({ detect: true, languages: all });
}
