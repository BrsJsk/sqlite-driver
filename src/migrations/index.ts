import { IModel } from "./interface/model.interface";
import * as fs from "fs";
import chalk from "chalk";

const MIGRATIONS_DIRECTORY = "./migration_files";

export const createMigrations = (models: IModel[]) => {
	console.log(chalk.blue("Running migrations..."));
	// creates migration folder
	if (!fs.existsSync(MIGRATIONS_DIRECTORY)) {
		fs.mkdirSync(MIGRATIONS_DIRECTORY);
	}

	// creates migration from models
	models.forEach(m => {
		// create file name
		const fileName = `${new Date().toISOString()}_migration_${
			m.name
		}.json`;

		let sql;

		if (m.type === 'create') {
			const sqlColumns = m.columns.map(column => `${column.name} ${column.type}`).join(', ');
			sql = `CREATE TABLE ${m.table} (${sqlColumns});`;
		}

		// create migration file content
		const fileContent = {
			table: m.table,
			name: m.name,
			type: m.type,
			sql
		};

		fs.appendFile(
			`${MIGRATIONS_DIRECTORY}/${fileName}`,
			JSON.stringify(fileContent),
			err => {
				if (err) {
					console.log(err);
				} else {
					console.log(
						chalk.green(
							`Created migration: ${fileName}`
						)
					);
				}
			}
		);
	});
};
