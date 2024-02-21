const Section = (props) => {
    const { children } = props;
  return (
    <section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
    </div>
  );
};

const Section_one = () => {
    <Section>
        <h1>Hi there,</h1>
      </Section>
};

const Section_two = () => {
    <Section>
        <h1>Adventus</h1>
      </Section>
};

const Section_three = () => {
    <Section>
        <h1>Projects</h1>
      </Section>
};

const Section_four = () => {
    <Section>
        <h1>Contact</h1>
      </Section>
};

// import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

// function Layout() {
//   const lenis = useLenis(({ scroll }) => {
//     // called every scroll
//   })

//   return (
//     <ReactLenis root>
//       <div>
//         <h1>Your Title Here</h1>
//         <p>Your content here...</p>
//         {/* More HTML content */}
//       </div>
//     </ReactLenis>
//   )
// }
