import { IsNotEmpty, MinLength, NotEquals } from "class-validator";

export class CreateCatDto {
    id: number;

    @IsNotEmpty()
    @MinLength(2, {message: 'O nome do gato tem que ter no mínimo 2 caracters.'})
    @NotEquals(" ")
    nome: string;
    raca: string;
    corOlhos: string;
}