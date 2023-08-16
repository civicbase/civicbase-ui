export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  size?: ButtonSize
}

export type IconProps = {
  variant?: 'primary' | 'danger'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export type TextProps = {
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
