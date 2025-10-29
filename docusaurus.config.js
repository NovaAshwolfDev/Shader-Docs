// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "docs.shader.miloashwolf",
  tagline: "Shaders for VRChat",
  favicon: "img/milo.png",

  // ✅ Your live site URL (change if needed)
  url: "https://docs.shader.miloashwolf.gay",
  baseUrl: "/",

  // ✅ GitHub Pages deployment info
  organizationName: "NovaAshwolfDev",
  projectName: "Shader-Docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  future: {
    v4: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/NovaAshwolfDev/Shader-Docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/milo.png",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "shader.miloashwolf.gay",
        logo: {
          alt: "Milo Ashwolf logo",
          src: "img/milo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar", 
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/NovaAshwolfDev/Shader-Docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Main Site",
                href: "https://miloashwolf.gay",
              },
              {
                label: "VRChat",
                href: "https://hello.vrchat.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/NovaAshwolfDev/Shader-Docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Milo Ashwolf — Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["csharp", "hlsl", "glsl"],
      },
    }),
};

export default config;
