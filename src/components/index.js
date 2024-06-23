import PageButton from "./PageButton.vue"
import PageLabel from "./PageLabel.vue"
import PageHisbody from "./PageHisbody.vue"
import NavBar from "./NavBar.vue"
const components = [
  PageButton,
  PageLabel,
  PageHisbody,
  NavBar
]
export const GlobalComponents = {
  install: (app) => {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}