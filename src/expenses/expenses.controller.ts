import { Body, Get, Post, Param, Controller } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Expense> {
    return this.expensesService.findOne(id);
  }

  @Post()
  async create(@Body() expense: Expense) {
    return this.expensesService.create(expense);
  }
}
