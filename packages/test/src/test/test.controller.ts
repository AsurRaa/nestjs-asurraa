import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post('create')
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get('all')
  findAll() {
    return this.testService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
