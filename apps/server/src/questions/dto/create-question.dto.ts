import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    location: string;
}