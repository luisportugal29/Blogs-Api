import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class BlogSearchCriteriaDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    contenido: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    autor: string;
}