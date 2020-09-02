import { createMedia } from "@artsy/fresnel"
const QueryBreakpoints = createMedia({
   breakpoints: {
      sm: 0,
      md: 960,
      lg: 1440,
   },
})
// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints