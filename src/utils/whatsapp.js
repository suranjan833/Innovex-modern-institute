/**
 * Formats form enquiry details into a structured WhatsApp message and opens WhatsApp.
 */
export function openWhatsAppEnquiry({ whatsappNumber, subject, fields }) {
  const cleanNumber = String(whatsappNumber || '').replace(/\D/g, '');
  const lines = [
    `*${subject}*`,
    ...fields
      .filter(([, value]) => String(value || '').trim() !== '')
      .map(([label, value]) => `*${label}:* ${String(value).trim()}`),
  ];

  const text = encodeURIComponent(lines.join('\n'));
  const url = `https://wa.me/${cleanNumber}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
