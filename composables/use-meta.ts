import { siteName, siteUrl } from '~/constants';

export function useMeta(title?: string, description?: string, ogImage?: string) {
  const effectiveTitle = title ? `${title} － ${siteName}` : siteName;
  useHead({
    title: effectiveTitle,
    htmlAttrs: { lang: 'de-DE' },
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  });
  useServerSeoMeta({
    title: effectiveTitle,
    ogTitle: effectiveTitle,
    description,
    ogDescription: description,
    ogImage: ogImage ?? `${siteUrl}/images/og-image.jpg`,
    ogLocale: 'de_DE',
    twitterCard: 'summary_large_image',
  });
}
