import React from "react"
import { MediaContextProvider, Media } from "../Media"

export default function Home() {
  return (
    <MediaContextProvider>
      <Media lessThan='md'>
        <div className="container">
          <h1>Small Devices Version</h1>
          <p>This version is only visible on small devices</p>
        </div>
      </Media>
      <Media greaterThanOrEqual='md'>
        <div className="container">
          <h1>Large Devices Version</h1>
          <p>This version is only visible on large devices</p>
        </div>
      </Media>
    </MediaContextProvider>
  )
}
