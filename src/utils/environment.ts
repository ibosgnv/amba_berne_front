const isProd = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

export const environment = {
  apiUrl: isProd ? '/api/v1/' : 'http://localhost:8080/api/v1/',
};
