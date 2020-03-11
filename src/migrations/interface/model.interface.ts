export interface IModel {
	name: string;
	table: string;
	type: "create" | "update";
	columns: IModelColumns[];
}

export interface IModelColumns {
	name: string;
	type: "NULL" | "INTEGER" | "REAL" | "TEXT" | "BLOB";
}
