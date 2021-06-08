const path = require('path');
//const packageJson = require('./package.json');

//const {version} = packageJson;
const iconDir = path.resolve(__dirname, 'src', 'icons');

let config = {
    /*hooks: {
        generateAssets: require('./tools/generateAssets'),
    },*/
    packagerConfig: {
        name: 'Electron React App',
        executableName: 'electron-react-demo',
        asar: true, // appCategoryType: 'public.app-category.developer-tools',
        icon: path.resolve(__dirname, 'src', 'icons', 'demo'),
        win32metadata: {
            CompanyName: 'NoCompanyOpenSAUCE',
            OriginalFilename: 'packagerConfig Electron React App',
        }
    },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            platforms: ['win32'],
            config: (arch) => {
                return {
                    name: 'electron-react-demo',
                    authors: 'Anik',
                    exe: 'electron-react-demo.exe',
                    iconUrl: 'https://raw.githubusercontent.com/ssi-anik/electron-react-demo/f23cca5cb972aafccebdd4ea6827e77d25f70d9e/src/icons/win/icon.ico',
                    noMsi: true, // setupExe: `electron-fiddle-${version}-win32-${arch}-setup.exe`,
                    setupExe: `electron-react-demo-win32-${arch}-setup.exe`,
                    setupIcon: path.resolve(iconDir, 'demo.ico'),
                };
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            platforms: ['linux'],
            config: {
                maintainer: "Anik",
                homepage: "https://github.com/ssi-anik",
                icon: path.resolve(iconDir, 'demo.png'), /*icon: {
                    scalable: path.resolve(iconDir, 'fiddle.svg'),
                },*/
            },
        },
        /*{
            name: '@electron-forge/maker-rpm',
            platforms: ['linux'],
        },*/
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'electron',
                    name: 'fiddle',
                },
                draft: true,
                prerelease: false,
            },
        },
    ],
};

module.exports = config;

config = {
    "packagerConfig": {
        "icon": "src/icons/mac/icon.icns",
        "executableName": "electron-react-demo"
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "ElectronReactDemo",
                "authors": "Anik"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {
                "maintainer": "Anik",
                "homepage": "https://github.com/ssi-anik",
                "icon": "src/icons/png/1024x1024.png"
            }
        }
    ]
};
export default config;
