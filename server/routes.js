import nextRoutes from 'next-routes';

const routes = nextRoutes();

routes
    .add('index', '/')
    .add('delivery', '/delivery')
    .add('about', '/about')
    .add('catalog/new', '/catalog/new')
    .add('catalog/creamy', '/catalog/creamy')
    .add('catalog/sherbets', '/catalog/sherbets')
    .add('catalog/fruit-ice', '/catalog/fruit-ice')
    .add('catalog/melorin', '/catalog/melorin');

export default routes;
