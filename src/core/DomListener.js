export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('No $root provider for DomListener')
    }
    console.log($root)
    this.$root = $root
  }
}
