// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'basics',
    {
      type: 'category',
      label: 'Shaders',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Grid Shader',
          collapsed: false,
          items: [
            'shaders/gridshader/overview',
            'shaders/gridshader/properties',
            'shaders/gridshader/usage',
          ],
        },
        {
          type: 'category',
          label: 'Dark Matter Shader',
          collapsed: false,
          items: [
            'shaders/darkmatter/overview',
            'shaders/darkmatter/properties',
            'shaders/darkmatter/usage',
          ],
        },
        {
          type: 'category',
          label: 'Simple Lava Shader',
          collapsed: false,
          items: [
            'shaders/lavashader/overview',
            'shaders/lavashader/properties',
            'shaders/lavashader/usage',
          ],
        },
        {
          type: 'category',
          label: 'Halloween Shader',
          collapsed: false,
          items: [
            'shaders/halloweenshader/overview',
            'shaders/halloweenshader/properties',
            'shaders/halloweenshader/usage',
          ],
        },
        {
          type: 'category',
          label: 'Hologram Shader',
          collapsed: false,
          items: [
            'shaders/holoshader/overview',
            'shaders/holoshader/properties',
            'shaders/holoshader/usage',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
