import { IsDate, IsDateString, IsNotEmpty, IsString, Length } from "class-validator";


export class CreateBlogDto {

    @IsString()
    @Length(3, 50, { message: 'La longitud debe estar entre 3 a 50 caracteres'})
    titulo: string;

    @IsString()
    @Length(3, 55, { message: 'La longitud debe estart entre 3 a 55 caracteres'})
    autor: string;

    @IsString()
    @IsNotEmpty({ message: 'El contenido no debe estar vacio'})
    contenido: string;
    
}