export function arrayMove (array: any[], from: number, to: number) {
  if (!Array.isArray(array) || to === from || to === null || from === null || to < 0 || to >= array.length || from > array.length || from < 0) {
    return array
  }
  const _array = array.slice()
  _array.splice(to, 0, _array.splice(from, 1)[0])
  return _array
}

export function deleteArrayItem (array: any[], deleteIndex: number, deleteCount = 1) {
  if (!Array.isArray(array) || array.length <= deleteIndex || deleteIndex < 0) {
    return array
  }

  const _array = array.slice()
  _array.splice(deleteIndex, deleteCount)
  return _array
}
