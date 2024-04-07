import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { Accomodation, Expense, Meal } from './expense.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, Meal, Accomodation])],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class ExpensesModule {}
