import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <div>
        <h1>Your Title Here</h1>
        <p>Your content here...</p>
        {/* More HTML content */}
      </div>
    </ReactLenis>
  )
}
