import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DEVELOPMENTS, PUBLISHED, REGULATIONS, SOURCE_BY_ID, articleReferences, type Category } from '../../data/insights';
import { ArticleCard, Crumbs, Developments, RegulationTracker, SectionHead, SourceDirectory, usePageMeta } from './InsightsUI';
import './insights.css';

/** The page each homepage Insights card opens: its articles, tracker, developments and sources. */
export default function InsightCategoryPage({ category: c }: { category: Category }) {
  usePageMeta({
    title: `${c.name} | TierraTrace Insights`,
    description: c.description,
    path: `/insights/${c.id}`,
    image: c.image.src,
  });

  const articles = PUBLISHED.filter((a) => a.category === c.id);
  const hasRegs = REGULATIONS.some((r) => r.categories.includes(c.id));
  const hasDevs = DEVELOPMENTS.some((d) => d.categories.includes(c.id));
  const sourceIds = [
    ...new Set([
      ...articles.flatMap(articleReferences),
      ...REGULATIONS.filter((r) => r.categories.includes(c.id)).flatMap((r) => r.sourceIds),
    ]),
  ].filter((id) => SOURCE_BY_ID[id]);

  return (
    <div className="ins">
      <header className="ins-hero ins-hero--cat">
        <div className="ins-hero-copy">
          <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: c.name }]} />
          <p className="ins-kicker">{c.name}</p>
          <h1>{c.cardTitle}</h1>
          <p className="ins-lead">{c.description}</p>
          <ul className="ins-scope" aria-label="What this topic covers">
            {c.scope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <figure className="ins-hero-media">
          <img src={c.image.src} alt={c.image.alt} />
        </figure>
      </header>

      <section className="ins-sec" aria-labelledby="cat-articles">
        <SectionHead kicker="Analysis" title={articles.length > 1 ? 'Articles' : 'In depth'} id="cat-articles" />
        {/* the topic hero already shows the card image, so articles here lead with text */}
        <div className={`ins-agrid ${articles.length === 1 ? 'is-single' : ''}`}>
          {articles.map((a) => (
            <ArticleCard key={a.slug} a={a} text />
          ))}
        </div>
      </section>

      {hasRegs && (
        <section className="ins-sec ins-sec--tint" aria-labelledby="cat-regs">
          <SectionHead
            kicker="Regulatory tracker"
            title="Status and key dates"
            body="Each act is labelled by legal status: in force and applying, in force with obligations that apply later, adopted but not yet in force, or amended. Dates are read from the Official Journal text. This is a summary, not legal advice."
            id="cat-regs"
          />
          <RegulationTracker category={c.id} />
        </section>
      )}

      {hasDevs && (
        <section className="ins-sec" aria-labelledby="cat-devs">
          <SectionHead kicker="Latest developments" title="Dated publications" id="cat-devs" />
          <Developments category={c.id} />
        </section>
      )}

      <section className="ins-sec ins-sec--tint" aria-labelledby="cat-sources">
        <SectionHead kicker="Sources" title="Sources for this topic" id="cat-sources" />
        <SourceDirectory ids={sourceIds} />
      </section>

      <section className="ins-sec ins-next" aria-label="Further reading">
        <Link to="/insights" className="ins-btn">
          All insights and search <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        {c.product && (
          <Link to={c.product.to} className="ins-btn ins-btn--ghost">
            About {c.product.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </section>
    </div>
  );
}
