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
          label: 'Ultra Flow Shader',
          collapsed: true,
          items: [
            'shaders/ultraflow/overview',
            'shaders/ultraflow/properties',
          ],
        }
      ],
    },
  ],
};

export default sidebars;
