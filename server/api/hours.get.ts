import type { PublicHours } from '#shared/business-hours';
export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-store');
  try {
    return await $fetch<PublicHours>(useRuntimeConfig(event).hoursApiUrl, {
      query: { business: 'dezal' },
      timeout: 8000,
      retry: 0,
    });
  } catch {
    throw createError({
      statusCode: 503,
      statusMessage: 'Nie można teraz wczytać godzin biura.',
    });
  }
});
