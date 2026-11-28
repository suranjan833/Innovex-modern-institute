import siteContent from '../../content/site-content.json';
import leadershipMessages from '../../content/leadership-messages.json';
import coursesCatalog from '../../content/courses-catalog.json';

/**
 * Returns the editable site content, leadership messages, and full course catalog.
 */
export function useSiteContent() {
  return {
    ...siteContent,
    leadershipMessages,
    coursesCatalog,
  };
}
