const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                node: "10.16.3",
            },
            useBuiltIns: "usage",
        },
    ],
];

module.exports = { presets };