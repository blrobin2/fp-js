import { curry }     from 'ramda'
import { Maybe, IO } from 'ramda-fantasy'
const Just    = Maybe.Just
const Nothing = Maybe.Nothing

//safeDiv :: Number -> Number -> Maybe Number
const safeDiv = curry((n: number, d: number) =>
  d === 0
    ? Nothing()
    : Just(n / d))

//stdoutWrite :: String -> IO()
const stdoutWrite = (data: string) => IO(() => console.log(data))

stdoutWrite(safeDiv(3,2)).runIO()