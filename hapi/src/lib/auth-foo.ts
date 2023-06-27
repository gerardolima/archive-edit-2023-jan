import Hapi from '@hapi/hapi'
import Boom from '@hapi/boom'


const scheme: Hapi.ServerAuthScheme = () => ({
  authenticate: function (request, h) {
    if (!request.query['potato']) throw Boom.unauthorized(null, 'Custom')
    // const secret = request.headers['api-secret']
    // const key = request.headers['api-key']

    if (!request.headers['api-secret']) throw Boom.unauthorized(null, 'Custom')
    if (!request.headers['api-key']) throw Boom.unauthorized(null, 'Custom')

    return h.authenticated({credentials: {usr: 'potato-head'}})
  },
})


/**
 * `auth-foo@1.0.0`
 */
export default Object.freeze<Hapi.Plugin<void>>({
  name: 'auth-foo-plugin',
  version: '1.0.0',
  register: server => {
    server.auth.scheme('scheme-foo', scheme)
    server.auth.strategy('strategy-foo', 'scheme-foo')
  },
})

