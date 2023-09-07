import { useAnimate } from "framer-motion"

export function DelightfulButton ({ cta, className, particleCount, blastRadius }) {
  className = `text-lg font-medium bg-purple rounded-full p-4 w-56 ${className}`
  cta = cta || "Click Me!"
  particleCount = particleCount || 20
  blastRadius = blastRadius || 200

  const [scope, animate] = useAnimate()

  const particles = Array.from({ length: particleCount })

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleClick = () => {
    const particlesAnimation = particles.map((_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const randomX = randomNumberBetween(-blastRadius, blastRadius)
      const randomY = randomNumberBetween(-blastRadius, blastRadius)

      return [
        `.particle-${index}`,
        {
          x: Math.cos(angle) * randomX,
          y: Math.sin(angle) * randomY,
          scale: randomNumberBetween(1.5, 2.5),
          opacity: 1,
        },
        { duration: 0.4, at: "<" }
      ]
    })

    const particlesFadeOut = particles.map((_, index) => {
      return [
        `.particle-${index}`,
        { opacity: 0, scale: 0 },
        { duration: 0.3, at: "<" },
      ]
    })

    const particlesReset = particles.map((_, index) => {
      return [
        `.particle-${index}`,
        { x: 0, y: 0 },
        { duration: 0.000001 }
      ]
    })

    animate([
      ...particlesReset,
      ["button", { scale: 0.9 }, { duration: 0.1 }],
      ["button", { scale: 1 }, { duration: 0.08 }],
      ...particlesAnimation,
      [],
      ...particlesFadeOut,
    ])
  }

  const renderParticles = () => {
    const colors = ['fill-red', 'fill-green', 'fill-blue', 'fill-yellow', 'fill-pink']

    return particles.map((_, index) => {
      const randomColor = colors[(Math.floor(Math.random() * colors.length))]

      return (
        <svg
          className={ `absolute left-1/2 top-1/2 opacity-0 particle-${index}` }
          key={ index }
          viewBox="0 0 122 117"
          width="10"
          height="10"
        >
          <path
            className={ randomColor }
            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
          />
        </svg>
      )
    })
  }

  return (
    <div ref={ scope }>
      <button className={ className } onClick={ handleClick }>
        { cta }
      </button >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 block"
      >
        { renderParticles() }
      </span>
    </div>
  )
}
