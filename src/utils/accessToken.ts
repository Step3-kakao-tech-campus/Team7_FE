export const tokenStorage = {
  get() {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('accessToken');
  },
  set(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  },
  remove() {
    localStorage.removeItem('accessToken');
  },
};
