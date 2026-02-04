type QuoteData = {
  quoteText: string;
  author: string;
};

function extractPlainText(content: unknown): string {
  if (!content || !Array.isArray(content)) return "";
  
  let text = "";
  
  content.forEach((block: unknown) => {
    const typedBlock = block as { children?: unknown[] };
    if (typedBlock.children && Array.isArray(typedBlock.children)) {
      typedBlock.children.forEach((child: unknown) => {
        const typedChild = child as { text?: string };
        if (typedChild.text) {
          text += typedChild.text + " ";
        }
      });
    }
  });
  
  return text.trim();
}

function createSummary(fullText: string, maxLength = 200): string {
  if (fullText.length <= maxLength) return fullText;
  
  const truncated = fullText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.substring(0, lastSpace) + "...";
}

type HeroSummaryQuoteSeparatorProps = {
  content: unknown;
  quote: QuoteData;
  locale: string;
};

export default function HeroSummaryQuoteSeparator({
  content,
  quote,
}: HeroSummaryQuoteSeparatorProps) {
  const fullText = extractPlainText(content);
  const summary = createSummary(fullText);
  
  if (!summary) return null;

  return (
    <div className="bg-(--background)">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
          <p className="text-lg md:text-xl lg:text-2xl text-(--foreground) leading-relaxed font-light">
            {summary}
          </p>
        </div>
        
        <div className="hidden lg:flex items-center justify-center px-12 lg:px-20 py-16 lg:py-24 bg-(--ultralight-accent)">
          <div className="max-w-lg">
            <div className="flex items-start">
              <span className="text-6xl font-serif text-(--accent) leading-none mr-4 -mt-2">
                &ldquo;
              </span>
              <blockquote className="text-lg md:text-xl italic text-(--dark-accent) leading-relaxed">
                {quote?.quoteText}
              </blockquote>
            </div>
            {quote?.author && (
              <div className="mt-4 text-right text-sm text-(--muted-accent)">
                {quote.author}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
