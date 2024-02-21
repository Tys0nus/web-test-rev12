import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import styles from './projects.module.scss';
import {useLoader} from '@react-three/fiber'
import {PlaneGeometry, TextureLoader} from 'three'
import { useTexture } from '@react-three/drei';

const images = [
    "1.jpg",
    "2.jpg",
]

// const Image = ({ url }) => {
//     console.log(`The path to the image is: ${url}`);
//     const texture = useLoader(TextureLoader, url)
//     return (
//       <mesh>    
//         <PlaneGeometry attach="geometry" args={[1, 1]} />
//         <meshBasicMaterial attach="material" map={texture} />
//       </mesh>
//     )
//   }

 
// const Image = ({ url }) => {
//   const texture = useTexture(url);
//   return (
//     <mesh>
//       <planeGeometry attach="geometry" args={[1, 1]} />
//       <meshBasicMaterial attach="material" map={texture} />
//     </mesh>
//   );
// };


const Image = ({ url }) => {
  const texture = useLoader(TextureLoader, url)
  return (
    <mesh>
      <planeGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}


export default function Projects() {
    useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', (e) => { console.log(e) });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            if (lenis) lenis.destroy();
        };
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                <Column images={[images[0], images[0], images[0]]} />
                <Column images={[images[0], images[0], images[0]]} />
                <Column images={[images[0], images[0], images[0]]} />
                <Column images={[images[0], images[0], images[0]]} />
            </div>
        </main>
    )
}

const Column = ({ images }) => {
    return (
        <div className={styles.column}>
            {
                images.map((src, index) => {
                    return <div key={index} className={styles.imageContainer}>
                        {/* <Image src={`/public/images/${src}`} fill alt="image" /> */}
                        <Image url={`/images/${src}`} alt="image" />
                    </div>  
                })
            }
        </div>
    )
}
