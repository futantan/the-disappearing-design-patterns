type IStrategy = (a: number, b: number) => number;

const AddStrategy: IStrategy = (a, b) => a + b;
const SubtractStrategy: IStrategy = (a, b) => a - b;

class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public calculate(a: number, b: number) {
    return this.strategy(a, b);
  }
}

const context = new Context(AddStrategy);
console.log(context.calculate(1, 2)); // 3
context.setStrategy(SubtractStrategy);
console.log(context.calculate(1, 2)); // -1

context.setStrategy(SubtractStrategy);
console.log(context.calculate(1, 2)); // -1
