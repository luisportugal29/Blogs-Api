import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1706409686284 implements MigrationInterface {
    name = 'InitialSchema1706409686284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "titulo" varchar NOT NULL, "autor" varchar NOT NULL, "fecha" date DEFAULT (CURRENT_DATE), "contenido" varchar NOT NULL)`);
        await queryRunner.query(`
        INSERT INTO "blog"("titulo", "autor", "contenido")
        VALUES
        ('Como Ganar Musculo', 'Hanny Rambod', 'Tienes que entrenar al fallo muscular, realizando dropsets intensos!'),
        ('Recetas de Cocina', 'Ana González', 'Comparto una deliciosa receta de pasta con salsa de tomate y albahaca.'),
        ('Descubrimiento Científico', 'Carlos Rodríguez', 'Hemos hecho un descubrimiento revolucionario en el campo de la física cuántica.'),
        ('Consejos de Productividad', 'Laura Sánchez', 'Cómo aumentar la productividad en el trabajo con simples cambios en la rutina.'),
        ('Experiencia Deportiva', 'Pedro Martínez', 'Participé en una maratón hoy. La sensación de cruzar la meta es indescriptible.');
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
    }

}
