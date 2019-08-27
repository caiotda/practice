import { Body, Controller, Get, Req, Post, Param, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    @Get(':id')
    findOne(@Param('id') id) : string {
        return `this action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id:string) {
        return `This action removes a #${id} cat`;
    }
}
