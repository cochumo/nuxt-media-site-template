export default function ({ route, redirect }) {
  const params = route.fullPath.replace(route.path, '')

  // /有りにリダイレクト
  if (route.path.slice(-1) !== '/') {
    redirect(301, encodeURI(route.path) + '/' + params)
  }
}
