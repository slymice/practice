import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// Plugins should be registered by name, not imported as objects.
import pluginSecurity from "eslint-plugin-security";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      security: pluginSecurity,
      "no-unsanitized": pluginNoUnsanitized,
    },
    extends: [
      "plugin:js/recommended",         // from @eslint/js plugin
      "plugin:security/recommended",   // recommended rules for eslint-plugin-security
      "plugin:no-unsanitized/DOM",     // recommended rules for no-unsanitized
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        // You can add more globals here if needed
      },
      ecmaVersion: 2024,                // latest ECMAScript version
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
      "no-unsanitized/method": "warn",
      "no-unsanitized/property": "warn"
    },
  },
]);
