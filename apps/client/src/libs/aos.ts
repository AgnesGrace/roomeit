import AOS from 'aos'
import 'aos/dist/aos.css'

export const aosInit = () => {
  AOS.init({
    duration: 2000,
  })
}
