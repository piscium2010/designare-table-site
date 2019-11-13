module.exports = function (api) {
    api.cache(true)

    const presets = ["@babel/preset-react",["@babel/preset-env",{"targets":{"ie":"11"}}]]
    const plugins = [
        "@babel/plugin-syntax-object-rest-spread",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-syntax-dynamic-import"
    ]

    return {
        presets,
        plugins
    }
}