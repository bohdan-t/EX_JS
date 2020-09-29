import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provider for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)

      if (!this[method]) {
        const name = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${name} component`
        )
      }
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {

  }
}

// Privat function for this module
function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
