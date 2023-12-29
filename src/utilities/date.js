/**
 * @return {number} Date time
 */

// Crea un formateador de tiempo relativo en tu idioma
// y le pasamos un objeto con las opciones por defecto
const rtf = new Intl.RelativeTimeFormat({
    localeMatcher: 'best fit', // otros valores: 'lookup'
    numeric: 'always', // otros valores: 'auto' para poner "ayer" o "anteayer"
    style: 'long', // otros valores: 'short' o 'narrow'
})
// Para hablar que algo ocurrió hace un día
// Tenemos que usar unidades negativas
rtf.format(-1, 'day')
// > Hace 1 día

// Para hablar sobre algo que ocurrirá en el futuro
// Se usan los valores positivos
rtf.format(2, 'day')
// > Dentro de 2 días

// Podemos usar diferentes unidades de tiempo
// Y se pueden usar en singular y plural
rtf.format(-30, 'second')
// > Hace 30 segundos
rtf.format(-40, 'seconds')
// > Hace 40 segundos

  
const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  
  const getSecondsDiff = timestamp => (Date.now() - timestamp) / 1000

  const getUnitAndValueDate = (secondsElapsed) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === "second") {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }
  }
  
  export const getTimeAgo = timestamp => {
    const rtf = new Intl.RelativeTimeFormat()
  
    const secondsElapsed = getSecondsDiff(timestamp)
    const {value, unit} = getUnitAndValueDate(secondsElapsed)
    return rtf.format(value, unit)
  }
  