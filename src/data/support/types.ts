/**
 * Content model for the Support and Trust Center (Help Center, Documentation, legal drafts).
 * Text may contain these inline forms, parsed into React elements (never injected as HTML):
 *   [label](/route) or [label](https://…),   `code`   and   **bold**
 */

export type Block =
  | { t: 'h2'; text: string; id: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[] }
  | { t: 'steps'; items: string[] }
  | { t: 'code'; lang: string; code: string; caption?: string }
  | { t: 'note'; tone: 'info' | 'caution'; title: string; text: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  /** an item a person must confirm before the text is final (legal drafts) */
  | { t: 'review'; text: string };

export type HelpCategory = { id: string; name: string; description: string };

export type HelpArticle = {
  slug: string;
  category: string;
  title: string;
  intro: string;
  /** date the content was last written or checked; only set when accurate */
  updated: string;
  keywords: string[];
  body: Block[];
  related: string[];
};

export type DocPage = {
  slug: string;
  section: string;
  title: string;
  description: string;
  updated: string;
  body: Block[];
};

export type LegalDoc = {
  title: string;
  summary: string;
  status: 'draft';
  sections: { id: string; title: string; body: Block[] }[];
  checklist: string[];
};
