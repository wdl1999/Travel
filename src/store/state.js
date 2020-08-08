const defaultCity = '深圳'
if (localStorage) {
  try {
    this.defaultCity = localStorage.city
  } catch (e) {}
}
export default({
  city: defaultCity
})
