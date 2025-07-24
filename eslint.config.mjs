import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// Plugins should be registered by name, not imported as objects.
import pluginSecurity from "eslint-plugin-security";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";

export default defineConfig([
  { ignores: ["assets/js/bootstrap*.js", "vendor/**"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      js,
      security: pluginSecurity,
      "no-unsanitized": pluginNoUnsanitized
    },
    rules: {
      ...js.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
      "no-unsanitized/method": "warn",
      "no-unsanitized/property": "warn"
    }
  }
]);
