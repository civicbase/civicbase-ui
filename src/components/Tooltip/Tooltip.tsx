import { ReactElement } from 'react'
import { Config, usePopperTooltip } from 'react-popper-tooltip'

import Tooltip from './styles'

const ToolTip: React.FC<{
  label: string | null
  variant?: 'dark' | 'light'
  popperProps?: Config
  children: ReactElement
}> = ({ children, label, variant, popperProps = {}, ...props }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip(popperProps)

  if (label) {
    return (
      <>
        <div ref={setTriggerRef}>{children}</div>
        {visible && (
          <Tooltip ref={setTooltipRef} {...getTooltipProps()} variant={variant} {...props}>
            {label}
          </Tooltip>
        )}
      </>
    )
  }

  return children
}

export default ToolTip
