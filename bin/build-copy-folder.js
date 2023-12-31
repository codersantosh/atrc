const fs = require('fs');
const path = require('path');
const ProgressBar = require('progress');

const PACKAGES_DIR = path.resolve(__dirname, '../packages').replace(/\\/g, '/');
const BUILD_DIR = path.resolve(__dirname, '../build').replace(/\\/g, '/');
const fileExtensions = ['js', 'json', 'scss']; // Add more file extensions as needed

function getComponentType(file) {
	return path.relative(PACKAGES_DIR, file).split(path.sep)[0];
}

function getComponentOutputDir(file) {
	const componentType = getComponentType(file);
	const relativePath = path.relative(PACKAGES_DIR, file);
	const outputDir = path
		.resolve(BUILD_DIR, componentType, path.dirname(relativePath))
		.replace(/\\/g, '/');
	return path.join(outputDir, path.basename(file)).replace(/\\/g, '/');
}

function processFiles() {
	const componentEntryPoints = [];

	fileExtensions.forEach((ext) => {
		const files = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true });

		files.forEach((file) => {
			if (file.isDirectory()) {
				const collectFiles = (dir) => {
					const componentFiles = fs.readdirSync(path.join(PACKAGES_DIR, dir));

					componentFiles.forEach((componentFile) => {
						const fullPath = path.join(PACKAGES_DIR, dir, componentFile);

						if (fs.statSync(fullPath).isDirectory()) {
							collectFiles(path.join(dir, componentFile));
						} else if (componentFile.endsWith(`.${ext}`)) {
							componentEntryPoints.push(fullPath);
						}
					});
				};

				collectFiles(file.name);
			}
		});
	});

	const totalFiles = componentEntryPoints.length;
	let processedFiles = 0;

	const bar = new ProgressBar('Build Progress: [:bar] :percent', {
		width: 30,
		incomplete: ' ',
		total: totalFiles,
	});

	for (const file of componentEntryPoints) {
		try {
			const componentOutputDir = getComponentOutputDir(file);

			if (!fs.existsSync(componentOutputDir)) {
				const isDirectory = fs.statSync(file).isDirectory();
				if (isDirectory) {
					fs.mkdirSync(componentOutputDir, { recursive: true });
				} else {
					fs.mkdirSync(path.dirname(componentOutputDir), { recursive: true });
					fs.copyFileSync(file, componentOutputDir);
				}
			}

			processedFiles += 1;
			bar.tick();

			if (processedFiles === totalFiles) {
				console.log('Build process completed.');
			}
		} catch (error) {
			console.error('Error processing file:', file, error);
		}
	}
}

// Ensure PACKAGES_DIR and BUILD_DIR exist
if (!fs.existsSync(PACKAGES_DIR)) {
	console.error('Packages directory does not exist:', PACKAGES_DIR);
	process.exit(1);
}

if (!fs.existsSync(BUILD_DIR)) {
	fs.mkdirSync(BUILD_DIR, { recursive: true });
}

processFiles();
