import { createAuth0Client } from '@auth0/auth0-spa-js';

const init = async () => {
  const client = await createAuth0Client({
    clientId: 'YE8Nv8eAX973OebJpgVlBAeHMb7uXcWy',
    domain: 'dev-6ndvovi5oa4depoq.uk.auth0.com',
    authorizationParams: {
      redirect_uri: 'https://testing-485cda.webflow.io/',
    },
  });
  // eslint-disable-next-line no-console
  console.log(client);
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const loginButton = document.querySelector('[data-element="login"]');
    const logoutButton = document.querySelector('[data-element="logout"]');

    if (!loginButton || !logoutButton) return;
    loginButton.addEventListener('click', async () => {
      await client.loginWithRedirect();
    });
    logoutButton.addEventListener('click', async () => {
      await client.logout();
    });
  });
};

init();
