## What is this?

This is a simple example of how to use [remix-i18next](https://github.com/sergiodxa/remix-i18next) with [Remix](https://remix.run)

## For more info...

You may have arrived here from the [Remix](https://github.com/remix-run/remix) repository, or the [react-i18next](https://github.com/i18next/react-i18next/) repository. Either way, for more documentation, please visit the [main README](https://github.com/sergiodxa/remix-i18next).

## Configuration

The i18n project requires certain configurations to function correctly. Here are the main configuration options and how to set them up:

1. **Supported Languages**:
   In the configuration file <code> **app/i18n/index.ts** </code> define the list of supported languages and their respective language codes. For example:

   <code>supportedLngs: ["en", "pt", "fr", "es"]</code>
   <br>

2. **Translation Files**:
   Create language-specific translation files for each supported language. These files should be created in the `public/i18n/locales/{{lang}}` directory and contain key-value pairs for translated strings. For example:

- `public/i18n/locales/en/common.json`:

```
  {
    "greeting": "Hello!!",
  }
```

- `public/i18n/locales/fr/common.json`:

```
{
  "greeting": "Salut!!",
}
```

## Development

Now, you can use i18n in your project. Import the useTranslation hook from react-i18next and if your namespace (NS) is not configured as "common", you must pass it as an argument to the useTranslation function.

<code>let { i18n, t } = useTranslation('index');</code>

In this example, the useTranslation hook is called with the namespace argument set to 'index'. This allows the component to access the current language to the 'index' namespace, retrieving the translations from the `public/i18n/locales/en/index.json` path
