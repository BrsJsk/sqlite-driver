import { IModel } from "../src/migrations/interface/model.interface";
import { createMigrations, runMigrations } from "../src/migrations";

const create = () => {
	// example models
	const models: IModel[] = [
		{
			name: "Users",
			table: "users",
			type: "create",
			columns: [
				{
					name: "name",
					type: "TEXT"
				},
				{
					name: "email",
					type: "TEXT"
				}
			]
		}
	];

	// run migrations
	createMigrations(models);
};

const run = () => {
	console.log("Hello from example!");

	create();

	setTimeout(() => {
		runMigrations();
	}, 5000);
};

run();
