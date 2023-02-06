export const getYear = (date: string) => new Date(date).toLocaleDateString('en-EN', { year: 'numeric' } as { year: 'numeric' });
