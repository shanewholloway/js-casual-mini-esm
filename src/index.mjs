import helpers from 'casual/src/helpers.js'

import prov_address from 'casual/src/providers/address.js'
import prov_internet from 'casual/src/providers/internet.js'
import prov_number from 'casual/src/providers/number.js'
import prov_payment from 'casual/src/providers/payment.js'
import prov_person from 'casual/src/providers/person.js'
import prov_text from 'casual/src/providers/text.js'


const casual = helpers.extend({}, helpers)

casual.functions = function() {
  let adapter = {};
  for (let name of Object.keys(this)) {
    if ('_' === name[0]) {
      adapter[name.slice(1)] = casual[name];
    }
  }
  return adapter;
}

casual.register_provider( helpers.extend( prov_address ))
casual.register_provider( helpers.extend( prov_internet ))
casual.register_provider( helpers.extend( prov_number ))
casual.register_provider( helpers.extend( prov_payment ))
casual.register_provider( helpers.extend( prov_person ))
casual.register_provider( helpers.extend( prov_text ))

export default casual
