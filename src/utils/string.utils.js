const generateId = () =>
  parseInt(Math.random().toString().slice(2)).toString(36)

export const genId = (complexity = 2) => {
  let res = ''
  for (let i = 0; i < complexity; i++) res += generateId()
  return res
}
