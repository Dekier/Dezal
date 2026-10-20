import type { H3Event } from 'h3';
import { publicHours, type PublicHours } from '#shared/business-hours';

const getSchedule = defineCachedFunction(
  async (event: H3Event) => {
    const hours = await $fetch<PublicHours>(
      useRuntimeConfig(event).hoursApiUrl,
      {
        query: { business: 'dezal' },
        timeout: 2000,
        retry: 0,
      }
    );
    return hours.schedule;
  },
  {
    name: 'business-hours-schedule',
    getKey: () => 'dezal',
    maxAge: 60,
    swr: true,
    staleMaxAge: -1,
  }
);

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-store');
  try {
    const schedule = await getSchedule(event);
    return publicHours('dezal', schedule);
  } catch {
    throw createError({
      statusCode: 503,
      statusMessage: 'Nie można teraz wczytać godzin biura.',
    });
  }
});
