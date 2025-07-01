import { usePrismic } from '@prismicio/vue';
import type { EventDocument } from '~/prismicio-types';

export function useEvents() {
  const { client } = usePrismic();

  return useAsyncData('events', () =>
    client.getAllByType<EventDocument>('event', {
      orderings: [{ field: 'my.event.date', direction: 'asc' }],
    }),
  );
}
