import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accomodation, Expense, Meal } from './expense.entity';

@Injectable()
export class ExpensesService {
  private readonly logger = new Logger(ExpensesService.name);

  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,
    @InjectRepository(Meal)
    private mealRepository: Repository<Meal>,
    @InjectRepository(Accomodation)
    private accomodationRepository: Repository<Accomodation>,
  ) {}

  async fincOne(id: number): Promise<Expense> {
    const expense = await this.expenseRepository.findOne({
      where: { id },
    });

    if (!expense) {
      this.logger.warn('Despesa not found.');
      throw new BadRequestException('Despesa not found.');
    }

    return expense;
  }

  async create(expense: Expense) {
    let newExpense = expense;

    // Check if the expense is a meal
    let newMeal = expense as Meal;

    if (newMeal.lunch) {
      return this.mealRepository.save(newMeal);
    }

    // Check if the expense is an accomodation
    let newAccomodation = expense as Accomodation;

    if (newAccomodation.checkIn && newAccomodation.checkOut) {
      return this.accomodationRepository.save(newAccomodation);
    }

    return this.expenseRepository.save(newExpense);
  }
}
