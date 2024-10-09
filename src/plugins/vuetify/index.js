import "vuetify/styles"; // Importa los estilos de Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  theme: light,
  components,
  directives,
});

export default vuetify;
