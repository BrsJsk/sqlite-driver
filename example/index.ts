import { IModel } from "../src/migrations/interface/model.interface";
import { createMigrations } from "../src/migrations";

const migrate = () => {
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

	migrate();
};

run();
