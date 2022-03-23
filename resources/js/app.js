require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import {ApplicationProvider} from './src/providers/application';

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
      <ApplicationProvider>
        <App {...props} />
      </ApplicationProvider>,
      el
    );
  },
});
