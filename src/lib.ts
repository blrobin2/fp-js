import { curry, prop } from 'ramda'
import { Maybe, IO, Future } from 'ramda-fantasy'
const Just = Maybe.Just
const Nothing = Maybe.Nothing

//safeDiv :: Number -> Number -> Maybe Number
const safeDiv = curry(
  (n: number, d: number) => (d === 0 ? Nothing() : Just(n / d))
)

//githubUser :: String -> String
const githubUser = (username: string) =>
  `https://api.github.com/users/${username}`

//getNumRepos :: String -> Future Number
const getNumRepos = (username: string) =>
  httpRequest(githubUser(username)).map(prop('public_repos'))

// UNSAFE STUFF WITH SIDE-EFFECTS

//httpRequest :: String -> Future JSON
const httpRequest = (url: string) =>
  Future((reject, resolve) =>
    fetch(url).then(response => response.json()).then(resolve).catch(reject)
  )

//stdoutWrite :: String -> IO ()
const stdoutWrite = (data: string) => IO(() => console.log(data))

//unnecessaryDivide :: Number -> IO ()
const unnecessaryDivide = (num: number) =>
  stdoutWrite(safeDiv(100, num).toString()).runIO()

export const main = (username: string) =>
  getNumRepos(username).fork(console.error, unnecessaryDivide)
