const path = require('path');
module.exports = {
    stories: [
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config) => {
        config.resolve.alias['@hooks'] = path.resolve(__dirname, '../hooks/');
        config.resolve.alias['@api'] = path.resolve(__dirname, '../api/');
        return config;
    },
};
