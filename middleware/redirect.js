export default defineEventHandler(event => {
  const req = event.node.req;
  const host = req.headers.host;
  const url = req.url || '/';

  if (host === 'www.dezalroletypoznan.pl') {
    return sendRedirect(event, 'https://dezalroletypoznan.pl' + url, 301);
  }
});
