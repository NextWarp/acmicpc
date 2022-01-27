const filename = process.env.npm_config_filename || '1';

try {
    require(`./${filename}.js`)
} catch (error) {
    console.error(error);
}
