import type {Plugin} from '@hapi/hapi'
import routes from './routes'


/**
 * `movies@1.0.0`
 * Recommended route prefix 'api/movies'
 */
export default Object.freeze<Plugin<void>>({
  name: 'movies',
  version: '1.0.0',
  register: server => server.route(routes),
})
