const fs = require('fs-extra');

async function copyAssets() {
    try {

        // Copy data directory
        await fs.copy('src/assets/data', 'dist/assets/data');

        // Copy fonts directory
        await fs.copy('src/assets/fonts', 'dist/assets/fonts');

        // Copy img directory
        await fs.copy('src/assets/img', 'dist/assets/img');

        // Copy phearion directory
        await fs.copy('src/assets/phearion', 'dist/assets/phearion');

        console.log('Assets copied successfully.');
    } catch (error) {
        console.error('Error copying assets:', error);
    }
}

copyAssets();
