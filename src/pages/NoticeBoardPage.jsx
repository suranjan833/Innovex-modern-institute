import { useSiteContent } from '../data/useSiteContent';
import PageHeader from '../components/common/PageHeader';
import NoticeCard from '../components/common/NoticeCard';

export default function NoticeBoardPage() {
  const { notices } = useSiteContent();

  return (
    <>
      <PageHeader
        badge="Announcements"
        title="Notice Board"
        subtitle="Official static notices and academic updates managed through the institute content file."
      />

      <section className="section section-ivory">
        <div className="container">
          <div className="grid-3">
            {notices.map((notice) => (
              <NoticeCard key={notice.title} notice={notice} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
