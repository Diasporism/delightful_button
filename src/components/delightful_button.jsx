export function DelightfulButton ({ cta, className }) {
  const defaultCTA = "Click Me!"
  const defaultClass = "bg-purple rounded-full p-4 w-56"

  const computedClass = `${defaultClass} ${className}`

  return (
    <button className={ computedClass }>
      { cta || defaultCTA }
    </button >
  )
}
