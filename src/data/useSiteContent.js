import siteContent from '../../content/site-content.json';
import leadershipMessages from '../../content/leadership-messages.json';

/**
 * Returns the editable site content and leadership messages objects.
 */
export function useSiteContent() {
  return {
    ...siteContent,
    leadershipMessages,
  };
}
