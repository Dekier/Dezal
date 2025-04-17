export default function({ req, redirect }) {
  if (process.server && req && req.headers) {
    const host = req.headers.host;

    if (host === 'www.dezalroletypoznan.pl') {
      redirect(301, 'https://dezalroletypoznan.pl' + req.url);
    }
  }
}
