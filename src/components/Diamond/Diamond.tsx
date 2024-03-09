import tw from 'twin.macro'

import Button from '@ui/Button'
import Typography, { Hint } from '@ui/Typography'

export const DiamondSVG = ({ index }: { index: string }) => {
  return (
    <svg
      width={220}
      height="220"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      overflow="inherit"
    >
      <g transform="translate(220,110)">
        <circle r="5" cx="-20" cy="0" fill="#cbd5e1" id={`diamond-${index}10`} />
        <circle r="5" cx="-40" cy="0" fill="#cbd5e1" id={`diamond-${index}21`} />
        <circle r="5" cx="-30" cy="-10" fill="#cbd5e1" id={`diamond-${index}20`} />
        <circle r="5" cx="-30" cy="10" fill="#cbd5e1" id={`diamond-${index}22`} />
        <circle r="5" cx="-60" cy="0" fill="#cbd5e1" id={`diamond-${index}32`} />
        <circle r="5" cx="-50" cy="-10" fill="#cbd5e1" id={`diamond-${index}31`} />
        <circle r="5" cx="-50" cy="10" fill="#cbd5e1" id={`diamond-${index}33`} />
        <circle r="5" cx="-40" cy="-20" fill="#cbd5e1" id={`diamond-${index}30`} />
        <circle r="5" cx="-40" cy="20" fill="#cbd5e1" id={`diamond-${index}34`} />
        <circle r="5" cx="-80" cy="0" fill="#cbd5e1" id={`diamond-${index}43`} />
        <circle r="5" cx="-70" cy="-10" fill="#cbd5e1" id={`diamond-${index}42`} />
        <circle r="5" cx="-70" cy="10" fill="#cbd5e1" id={`diamond-${index}44`} />
        <circle r="5" cx="-60" cy="-20" fill="#cbd5e1" id={`diamond-${index}41`} />
        <circle r="5" cx="-60" cy="20" fill="#cbd5e1" id={`diamond-${index}45`} />
        <circle r="5" cx="-50" cy="-30" fill="#cbd5e1" id={`diamond-${index}40`} />
        <circle r="5" cx="-50" cy="30" fill="#cbd5e1" id={`diamond-${index}46`} />
        <circle r="5" cx="-100" cy="0" fill="#cbd5e1" id={`diamond-${index}54`} />
        <circle r="5" cx="-90" cy="-10" fill="#cbd5e1" id={`diamond-${index}53`} />
        <circle r="5" cx="-90" cy="10" fill="#cbd5e1" id={`diamond-${index}55`} />
        <circle r="5" cx="-80" cy="-20" fill="#cbd5e1" id={`diamond-${index}52`} />
        <circle r="5" cx="-80" cy="20" fill="#cbd5e1" id={`diamond-${index}56`} />
        <circle r="5" cx="-70" cy="-30" fill="#cbd5e1" id={`diamond-${index}51`} />
        <circle r="5" cx="-70" cy="30" fill="#cbd5e1" id={`diamond-${index}57`} />
        <circle r="5" cx="-60" cy="-40" fill="#cbd5e1" id={`diamond-${index}50`} />
        <circle r="5" cx="-60" cy="40" fill="#cbd5e1" id={`diamond-${index}58`} />
        <circle r="5" cx="-120" cy="0" fill="#cbd5e1" id={`diamond-${index}65`} />
        <circle r="5" cx="-110" cy="-10" fill="#cbd5e1" id={`diamond-${index}64`} />
        <circle r="5" cx="-110" cy="10" fill="#cbd5e1" id={`diamond-${index}66`} />
        <circle r="5" cx="-100" cy="-20" fill="#cbd5e1" id={`diamond-${index}63`} />
        <circle r="5" cx="-100" cy="20" fill="#cbd5e1" id={`diamond-${index}67`} />
        <circle r="5" cx="-90" cy="-30" fill="#cbd5e1" id={`diamond-${index}62`} />
        <circle r="5" cx="-90" cy="30" fill="#cbd5e1" id={`diamond-${index}68`} />
        <circle r="5" cx="-80" cy="-40" fill="#cbd5e1" id={`diamond-${index}61`} />
        <circle r="5" cx="-80" cy="40" fill="#cbd5e1" id={`diamond-${index}69`} />
        <circle r="5" cx="-70" cy="-50" fill="#cbd5e1" id={`diamond-${index}60`} />
        <circle r="5" cx="-70" cy="50" fill="#cbd5e1" id={`diamond-${index}610`} />
        <circle r="5" cx="-140" cy="0" fill="#cbd5e1" id={`diamond-${index}76`} />
        <circle r="5" cx="-130" cy="-10" fill="#cbd5e1" id={`diamond-${index}75`} />
        <circle r="5" cx="-130" cy="10" fill="#cbd5e1" id={`diamond-${index}77`} />
        <circle r="5" cx="-120" cy="-20" fill="#cbd5e1" id={`diamond-${index}74`} />
        <circle r="5" cx="-120" cy="20" fill="#cbd5e1" id={`diamond-${index}78`} />
        <circle r="5" cx="-110" cy="-30" fill="#cbd5e1" id={`diamond-${index}73`} />
        <circle r="5" cx="-110" cy="30" fill="#cbd5e1" id={`diamond-${index}79`} />
        <circle r="5" cx="-100" cy="-40" fill="#cbd5e1" id={`diamond-${index}72`} />
        <circle r="5" cx="-100" cy="40" fill="#cbd5e1" id={`diamond-${index}710`} />
        <circle r="5" cx="-90" cy="-50" fill="#cbd5e1" id={`diamond-${index}71`} />
        <circle r="5" cx="-90" cy="50" fill="#cbd5e1" id={`diamond-${index}711`} />
        <circle r="5" cx="-80" cy="-60" fill="#cbd5e1" id={`diamond-${index}70`} />
        <circle r="5" cx="-80" cy="60" fill="#cbd5e1" id={`diamond-${index}712`} />
        <circle r="5" cx="-160" cy="0" fill="#cbd5e1" id={`diamond-${index}87`} />
        <circle r="5" cx="-150" cy="-10" fill="#cbd5e1" id={`diamond-${index}86`} />
        <circle r="5" cx="-150" cy="10" fill="#cbd5e1" id={`diamond-${index}88`} />
        <circle r="5" cx="-140" cy="-20" fill="#cbd5e1" id={`diamond-${index}85`} />
        <circle r="5" cx="-140" cy="20" fill="#cbd5e1" id={`diamond-${index}89`} />
        <circle r="5" cx="-130" cy="-30" fill="#cbd5e1" id={`diamond-${index}84`} />
        <circle r="5" cx="-130" cy="30" fill="#cbd5e1" id={`diamond-${index}810`} />
        <circle r="5" cx="-120" cy="-40" fill="#cbd5e1" id={`diamond-${index}83`} />
        <circle r="5" cx="-120" cy="40" fill="#cbd5e1" id={`diamond-${index}811`} />
        <circle r="5" cx="-110" cy="-50" fill="#cbd5e1" id={`diamond-${index}82`} />
        <circle r="5" cx="-110" cy="50" fill="#cbd5e1" id={`diamond-${index}812`} />
        <circle r="5" cx="-100" cy="-60" fill="#cbd5e1" id={`diamond-${index}81`} />
        <circle r="5" cx="-100" cy="60" fill="#cbd5e1" id={`diamond-${index}813`} />
        <circle r="5" cx="-90" cy="-70" fill="#cbd5e1" id={`diamond-${index}80`} />
        <circle r="5" cx="-90" cy="70" fill="#cbd5e1" id={`diamond-${index}814`} />
        <circle r="5" cx="-180" cy="0" fill="#cbd5e1" id={`diamond-${index}98`} />
        <circle r="5" cx="-170" cy="-10" fill="#cbd5e1" id={`diamond-${index}97`} />
        <circle r="5" cx="-170" cy="10" fill="#cbd5e1" id={`diamond-${index}99`} />
        <circle r="5" cx="-160" cy="-20" fill="#cbd5e1" id={`diamond-${index}96`} />
        <circle r="5" cx="-160" cy="20" fill="#cbd5e1" id={`diamond-${index}910`} />
        <circle r="5" cx="-150" cy="-30" fill="#cbd5e1" id={`diamond-${index}95`} />
        <circle r="5" cx="-150" cy="30" fill="#cbd5e1" id={`diamond-${index}911`} />
        <circle r="5" cx="-140" cy="-40" fill="#cbd5e1" id={`diamond-${index}94`} />
        <circle r="5" cx="-140" cy="40" fill="#cbd5e1" id={`diamond-${index}912`} />
        <circle r="5" cx="-130" cy="-50" fill="#cbd5e1" id={`diamond-${index}93`} />
        <circle r="5" cx="-130" cy="50" fill="#cbd5e1" id={`diamond-${index}913`} />
        <circle r="5" cx="-120" cy="-60" fill="#cbd5e1" id={`diamond-${index}92`} />
        <circle r="5" cx="-120" cy="60" fill="#cbd5e1" id={`diamond-${index}914`} />
        <circle r="5" cx="-110" cy="-70" fill="#cbd5e1" id={`diamond-${index}91`} />
        <circle r="5" cx="-110" cy="70" fill="#cbd5e1" id={`diamond-${index}915`} />
        <circle r="5" cx="-100" cy="-80" fill="#cbd5e1" id={`diamond-${index}90`} />
        <circle r="5" cx="-100" cy="80" fill="#cbd5e1" id={`diamond-${index}916`} />
        <circle r="5" cx="-200" cy="0" fill="#cbd5e1" id={`diamond-${index}109`} />
        <circle r="5" cx="-190" cy="-10" fill="#cbd5e1" id={`diamond-${index}108`} />
        <circle r="5" cx="-190" cy="10" fill="#cbd5e1" id={`diamond-${index}1010`} />
        <circle r="5" cx="-180" cy="-20" fill="#cbd5e1" id={`diamond-${index}107`} />
        <circle r="5" cx="-180" cy="20" fill="#cbd5e1" id={`diamond-${index}1011`} />
        <circle r="5" cx="-170" cy="-30" fill="#cbd5e1" id={`diamond-${index}106`} />
        <circle r="5" cx="-170" cy="30" fill="#cbd5e1" id={`diamond-${index}1012`} />
        <circle r="5" cx="-160" cy="-40" fill="#cbd5e1" id={`diamond-${index}105`} />
        <circle r="5" cx="-160" cy="40" fill="#cbd5e1" id={`diamond-${index}1013`} />
        <circle r="5" cx="-150" cy="-50" fill="#cbd5e1" id={`diamond-${index}104`} />
        <circle r="5" cx="-150" cy="50" fill="#cbd5e1" id={`diamond-${index}1014`} />
        <circle r="5" cx="-140" cy="-60" fill="#cbd5e1" id={`diamond-${index}103`} />
        <circle r="5" cx="-140" cy="60" fill="#cbd5e1" id={`diamond-${index}1015`} />
        <circle r="5" cx="-130" cy="-70" fill="#cbd5e1" id={`diamond-${index}102`} />
        <circle r="5" cx="-130" cy="70" fill="#cbd5e1" id={`diamond-${index}1016`} />
        <circle r="5" cx="-120" cy="-80" fill="#cbd5e1" id={`diamond-${index}101`} />
        <circle r="5" cx="-120" cy="80" fill="#cbd5e1" id={`diamond-${index}1017`} />
        <circle r="5" cx="-110" cy="-90" fill="#cbd5e1" id={`diamond-${index}100`} />
        <circle r="5" cx="-110" cy="90" fill="#cbd5e1" id={`diamond-${index}1018`} />
        <circle
          r="5"
          cx="-20"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}10`}
        />
        <circle
          r="5"
          cx="-40"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}21`}
        />
        <circle
          r="5"
          cx="-30"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: -12 }}
          id={`diamond-animated-${index}20`}
        />
        <circle
          r="5"
          cx="-30"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}22`}
        />
        <circle
          r="5"
          cx="-60"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}32`}
        />
        <circle
          r="5"
          cx="-50"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}31`}
        />
        <circle
          r="5"
          cx="-50"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}33`}
        />
        <circle
          r="5"
          cx="-40"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}30`}
        />
        <circle
          r="5"
          cx="-40"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}34`}
        />
        <circle
          r="5"
          cx="-80"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}43`}
        />
        <circle
          r="5"
          cx="-70"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}42`}
        />
        <circle
          r="5"
          cx="-70"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}44`}
        />
        <circle
          r="5"
          cx="-60"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}41`}
        />
        <circle
          r="5"
          cx="-60"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}45`}
        />
        <circle
          r="5"
          cx="-50"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}40`}
        />
        <circle
          r="5"
          cx="-50"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}46`}
        />
        <circle
          r="5"
          cx="-100"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}54`}
        />
        <circle
          r="5"
          cx="-90"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}53`}
        />
        <circle
          r="5"
          cx="-90"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}55`}
        />
        <circle
          r="5"
          cx="-80"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}52`}
        />
        <circle
          r="5"
          cx="-80"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}56`}
        />
        <circle
          r="5"
          cx="-70"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}51`}
        />
        <circle
          r="5"
          cx="-70"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}57`}
        />
        <circle
          r="5"
          cx="-60"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}50`}
        />
        <circle
          r="5"
          cx="-60"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}58`}
        />
        <circle
          r="5"
          cx="-120"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}65`}
        />
        <circle
          r="5"
          cx="-110"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}64`}
        />
        <circle
          r="5"
          cx="-110"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}66`}
        />
        <circle
          r="5"
          cx="-100"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}63`}
        />
        <circle
          r="5"
          cx="-100"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}67`}
        />
        <circle
          r="5"
          cx="-90"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}62`}
        />
        <circle
          r="5"
          cx="-90"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}68`}
        />
        <circle
          r="5"
          cx="-80"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}61`}
        />
        <circle
          r="5"
          cx="-80"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}69`}
        />
        <circle
          r="5"
          cx="-70"
          cy="-50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}60`}
        />
        <circle
          r="5"
          cx="-70"
          cy="50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}610`}
        />
        <circle
          r="5"
          cx="-140"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}76`}
        />
        <circle
          r="5"
          cx="-130"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}75`}
        />
        <circle
          r="5"
          cx="-130"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}77`}
        />
        <circle
          r="5"
          cx="-120"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}74`}
        />
        <circle
          r="5"
          cx="-120"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}78`}
        />
        <circle
          r="5"
          cx="-110"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}73`}
        />
        <circle
          r="5"
          cx="-110"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}79`}
        />
        <circle
          r="5"
          cx="-100"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}72`}
        />
        <circle
          r="5"
          cx="-100"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}710`}
        />
        <circle
          r="5"
          cx="-90"
          cy="-50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}71`}
        />
        <circle
          r="5"
          cx="-90"
          cy="50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}711`}
        />
        <circle
          r="5"
          cx="-80"
          cy="-60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}70`}
        />
        <circle
          r="5"
          cx="-80"
          cy="60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}712`}
        />
        <circle
          r="5"
          cx="-160"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}87`}
        />
        <circle
          r="5"
          cx="-150"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}86`}
        />
        <circle
          r="5"
          cx="-150"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}88`}
        />
        <circle
          r="5"
          cx="-140"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}85`}
        />
        <circle
          r="5"
          cx="-140"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}89`}
        />
        <circle
          r="5"
          cx="-130"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}84`}
        />
        <circle
          r="5"
          cx="-130"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}810`}
        />
        <circle
          r="5"
          cx="-120"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}83`}
        />
        <circle
          r="5"
          cx="-120"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}811`}
        />
        <circle
          r="5"
          cx="-110"
          cy="-50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}82`}
        />
        <circle
          r="5"
          cx="-110"
          cy="50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}812`}
        />
        <circle
          r="5"
          cx="-100"
          cy="-60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}81`}
        />
        <circle
          r="5"
          cx="-100"
          cy="60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}813`}
        />
        <circle
          r="5"
          cx="-90"
          cy="-70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}80`}
        />
        <circle
          r="5"
          cx="-90"
          cy="70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}814`}
        />
        <circle
          r="5"
          cx="-180"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}98`}
        />
        <circle
          r="5"
          cx="-170"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}97`}
        />
        <circle
          r="5"
          cx="-170"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}99`}
        />
        <circle
          r="5"
          cx="-160"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}96`}
        />
        <circle
          r="5"
          cx="-160"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}910`}
        />
        <circle
          r="5"
          cx="-150"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}95`}
        />
        <circle
          r="5"
          cx="-150"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}911`}
        />
        <circle
          r="5"
          cx="-140"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}94`}
        />
        <circle
          r="5"
          cx="-140"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}912`}
        />
        <circle
          r="5"
          cx="-130"
          cy="-50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}93`}
        />
        <circle
          r="5"
          cx="-130"
          cy="50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}913`}
        />
        <circle
          r="5"
          cx="-120"
          cy="-60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}92`}
        />
        <circle
          r="5"
          cx="-120"
          cy="60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}914`}
        />
        <circle
          r="5"
          cx="-110"
          cy="-70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}91`}
        />
        <circle
          r="5"
          cx="-110"
          cy="70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}915`}
        />
        <circle
          r="5"
          cx="-100"
          cy="-80"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}90`}
        />
        <circle
          r="5"
          cx="-100"
          cy="80"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}916`}
        />
        <circle
          r="5"
          cx="-200"
          cy="0"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}109`}
        />
        <circle
          r="5"
          cx="-190"
          cy="-10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}108`}
        />
        <circle
          r="5"
          cx="-190"
          cy="10"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1010`}
        />
        <circle
          r="5"
          cx="-180"
          cy="-20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}107`}
        />
        <circle
          r="5"
          cx="-180"
          cy="20"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1011`}
        />
        <circle
          r="5"
          cx="-170"
          cy="-30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}106`}
        />
        <circle
          r="5"
          cx="-170"
          cy="30"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1012`}
        />
        <circle
          r="5"
          cx="-160"
          cy="-40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}105`}
        />
        <circle
          r="5"
          cx="-160"
          cy="40"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1013`}
        />
        <circle
          r="5"
          cx="-150"
          cy="-50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}104`}
        />
        <circle
          r="5"
          cx="-150"
          cy="50"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1014`}
        />
        <circle
          r="5"
          cx="-140"
          cy="-60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}103`}
        />
        <circle
          r="5"
          cx="-140"
          cy="60"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1015`}
        />
        <circle
          r="5"
          cx="-130"
          cy="-70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}102`}
        />
        <circle
          r="5"
          cx="-130"
          cy="70"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1016`}
        />
        <circle
          r="5"
          cx="-120"
          cy="-80"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}101`}
        />
        <circle
          r="5"
          cx="-120"
          cy="80"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1017`}
        />
        <circle
          r="5"
          cx="-110"
          cy="-90"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}100`}
        />
        <circle
          r="5"
          cx="-110"
          cy="90"
          fill="#cbd5e1"
          style={{ zIndex: 10 }}
          id={`diamond-animated-${index}1018`}
        />
      </g>
    </svg>
  )
}

const Diamond = ({
  index,
  text,
  vote,
  canVote,
  array, // temporary
}: {
  index: string
  text?: string
  vote: (v: number) => void
  canVote: (v: number) => boolean
  array: number[]
}) => {
  const canVoteUp = canVote(1)
  const canVoteDown = canVote(-1)

  return (
    <div css={tw`flex flex-col items-center`}>
      {text && (
        <div css={tw`flex items-center`}>
          <Hint css={tw`text-red-300 mr-2`}>(Question {index})</Hint>
          <Typography>{text}</Typography>
        </div>
      )}

      <div css={tw`flex items-center mobile:flex-col tablet:flex-row`}>
        <Button
          variant="secondary"
          css={[
            tw`border-2 rounded-3xl border-green-400 text-green-400 h-min bg-white`,
            !canVoteUp && tw`border-gray-400 text-gray-500`,
            tw`mobile:hidden`,
          ]}
          onClick={() => vote(1)}
          disabled={!canVoteUp}
        >
          Agree
        </Button>
        <DiamondSVG index={index} />
        <Button
          variant="secondary"
          css={[
            tw`border-2 rounded-3xl border-red-300 text-red-300 h-min bg-white`,
            !canVoteDown && tw`border-gray-400 text-gray-500`,
            tw`mobile:hidden`,
          ]}
          onClick={() => vote(-1)}
          disabled={!canVoteDown}
        >
          Disagree
        </Button>

        <div css={tw`hidden space-x-4 mobile:(flex justify-between)`}>
          <Button
            variant="secondary"
            css={[
              tw`border-2 rounded-3xl border-green-400 text-green-400 h-min bg-white`,
              !canVoteUp && tw`border-gray-400 text-gray-500`,
            ]}
            onClick={() => vote(1)}
            disabled={!canVoteUp}
          >
            Agree
          </Button>
          <Button
            variant="secondary"
            css={[
              tw`border-2 rounded-3xl border-red-300 text-red-300 h-min bg-white`,
              !canVoteDown && tw`border-gray-400 text-gray-500`,
            ]}
            onClick={() => vote(-1)}
            disabled={!canVoteDown}
          >
            Disagree
          </Button>
        </div>
      </div>

      <div css={tw`max-w-xs`}>
        <Hint>{array.join(', ')}</Hint>
      </div>
    </div>
  )
}

export default Diamond
