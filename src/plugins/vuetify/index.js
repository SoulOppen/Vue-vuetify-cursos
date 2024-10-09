import "vuetify/styles"; // Importa los estilos de Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.min.css";
const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
  },
  components,
  directives,
  defaultSet: "mdi", // Usa el set de íconos 'mdi'
  sets: {
    mdi, // Incluye el set de íconos mdi que acabas de importar
  },
});

export default vuetify;
