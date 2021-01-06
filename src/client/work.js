
/**
 * replace app default script
 */

import { waitUntilLoad, loadScript } from './app/common'
import { checkPermission } from './app/check-permission'
import { handleEvent } from './app/event-handler'
import hack from './app/setsink'

async function run () {
  await waitUntilLoad()
  checkPermission()
  loadScript('app.js', 'rc-app')
  handleEvent()
  hack()
}

run()
