import {
  ChildEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity({ name: 'expenses' })
@TableInheritance({ column: { type: 'varchar', name: 'expense_Type' } })
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300, default: '' })
  description: string;
}

@ChildEntity()
export class Meal extends Expense {
  @Column({ default: false })
  lunch: boolean;
}

@ChildEntity()
export class Accomodation extends Expense {
  @Column({ nullable: false })
  checkIn: Date;

  @Column({ nullable: false })
  checkOut: Date;
}
