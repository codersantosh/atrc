/**
 * External dependencies
 */
const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');
const workerFarm = require('worker-farm');
const { Readable, Transform } = require('stream');

const worker = workerFarm(require.resolve('./build-worker'));

const ProgressBar = require('progress');

const PACKAGES_DIR = path.resolve(__dirname, '../packages').replace(/\\/g, '/');
const BUILD_DIR = path.resolve(__dirname, '../build').replace(/\\/g, '/');
const fileExtensions = ['js', 'scss', 'json']; // Add more file extensions as needed

function getComponentOutputDir(file) {
	const relativePath = path.relative(PACKAGES_DIR, file);
	const outputDir = path
		.resolve(BUILD_DIR, path.dirname(relativePath))
		.replace(/\\/g, '/');
	return path.join(outputDir, path.basename(file)).replace(/\\/g, '/');
}

async function processFiles() {
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
			} else {
				// Handle files (add your code here)
				// For example, you can access the file path using: path.join(PACKAGES_DIR, file.name)
				// Your logic for handling files goes here
				if (file.name.endsWith(`.${ext}`)) {
					const filePath = path.join(PACKAGES_DIR, file.name);
					// Add your specific logic for handling files here
					// For example, you might want to read the file, process its contents, or perform other operations.
					// You can use the 'filePath' variable to refer to the path of the current file.

					componentEntryPoints.push(filePath);
				}
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

	let complete = 0;
	console.log('Build process started...');

	for (const file of componentEntryPoints) {
		try {
			const componentOutputDir = getComponentOutputDir(file);

			if (!fs.existsSync(componentOutputDir)) {
				const isDirectory = fs.statSync(file).isDirectory();
				if (isDirectory) {
					fs.mkdirSync(componentOutputDir, { recursive: true });
				} else {
					await fs.mkdirSync(path.dirname(componentOutputDir), {
						recursive: true,
					});
					await new Promise((resolve, reject) => {
						worker(file, (error) => {
							if (error) {
								process.exitCode = 1;
								console.error(error);
								reject(error);
							} else {
								resolve();
							}
						});
					});
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
