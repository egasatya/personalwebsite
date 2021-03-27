import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme } from "@chakra-ui/react"
import { createBreakpoint } from "@chakra-ui/theme-tools"

const fonts = {
    ...chakraTheme.fonts,
    body: 'DM Sans'
}

const overrides = {
    ...chakraTheme,
    fonts,
}

const customTheme = extendTheme(overrides)

export default customTheme